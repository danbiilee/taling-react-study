// Promise에 기반한 Thunk를 만들어주는 함수
export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  // promiseCreator가 여러 개의 파라미터를 전달해야 한다면
  // 객체 타입의 파라미터를 받아오자
  return param => async dispatch => {
    dispatch({ type, param }); // 요청 시작
    try {
      // payload로 결과명 통일
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload }); // 성공
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true }); // 실패
    }
  };
};

// 리듀서에서 사용할 수 있는 유틸 함수들
export const reducerUtils = {
  // 초기 상태
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null,
  }),
  // 로딩중 상태
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  // 성공 상태
  loading: payload => ({
    loading: false,
    data: payload,
    error: null,
  }),
  // 실패 상태
  loading: error => ({
    loading: false,
    data: null,
    error,
  }),
};

// 비동기 관련 액션들을 처리하는 리듀서를 만들어주는 함수
// type =  action.type, key = state.key(예: posts, post)
export const handleAsyncActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading,
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};
