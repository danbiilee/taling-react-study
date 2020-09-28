import * as postsAPI from '../api/posts';
import {
  reducerUtils,
  handleAsyncActions,
  handleAsyncActionsById,
  createPromiseSaga,
} from '../lib/asyncUtils';
import { getContext, takeEvery } from 'redux-saga/effects';

/* 액션 타입 */
// 포스트 여러 개 조회
const GET_POSTS = 'posts/GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR'; // 요청 실패
// 포스트 하나 조회
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';
const GO_TO_HOME = 'GO_TO_HOME';

// redux-thunk -> redux-saga: 순수 액션 객체를 반환하는 액션 생성 함수로 변경
export const getPosts = () => ({ type: GET_POSTS });
export const getPost = (id) => ({ type: GET_POST, payload: id, meta: id }); // payload는 파라미터, meta는 리듀서에서 id를 알기 위함
export const goToHome = () => ({ type: GO_TO_HOME });

const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts);
const getPostSaga = createPromiseSaga(GET_POST, postsAPI.getPostById);
function* goToHomeSaga() {
  const history = yield getContext('history');
  history.push('/');
}

// 사가들 합치기
export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
  yield takeEvery(GO_TO_HOME, goToHomeSaga);
}

// 홈 화면으로 가는 thunk
// 3번째 인자를 사용하면 withExtraArgument에서 넣어준 값들을 사용할 수 있다.
// getState를 사용하면 스토어 상태를 확인해 조건부로 이동하거나, 특정 API를 호출해 성공했을 때만 이동하는 형식으로 구현 가능
// export const goToHome = () => (dispatch, getState, { history }) => {
//   history.push('/');
// };

// 반복되는 코드를 initial() 함수를 사용해 리팩토링
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      // const postsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
      // return postsReducer(state, action);
      // 목록을 요청할 땐 keepData=true -> 재로딩 하되, SUCCESS 떨어지기 전까지 기존 데이터 유지
      return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActionsById(GET_POST, 'post', true)(state, action); // 포스트 재로딩 이슈 해결2. id별 처리
    default:
      return state;
  }
}
