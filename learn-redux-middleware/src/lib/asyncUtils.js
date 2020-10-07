// Promise에 기반한 thunk를 만들어주는 함수
export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    try {
      dispatch({ type, param }); // 요청 시작
      const payload = await promiseCreator(param); // 결과의 이름을 payload로 통일
      dispatch({ type: SUCCESS, payload, param }); // 성공
    } catch (e) {
      dispatch({ type: ERROR, error: e }); // 실패
    }
  };
};

// 리듀서에서 사용할 수 있는 여러 유틸 함수들
export const reducerUtils = {
  // 초기상태: 초기 data의 기본값을 null로 설정했지만 변경 가능하다.
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null,
  }),
  // 로딩중 상태: prevData의 기본값을 null로 설정했지만,
  // 다른 값을 지정하면 null로 초기화하지 않고 다른 값을 유지할 수 있다.
  loading: (prevData = null) => ({
    loading: true,
    data: prevData,
    error: null,
  }),
  // 성공 상태
  success: (data) => ({
    loading: false,
    data,
    error: null,
  }),
  // 실패 상태
  error: (error) => ({
    loading: false,
    data: null,
    error,
  }),
};

export const handleAsyncActions = (type, key, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    // console.log('state[key]', state[key]); // state = posts모듈의 initialState
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(keepData ? state[key].data : null),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.error),
        };
      default:
        return state;
    }
  };
};
