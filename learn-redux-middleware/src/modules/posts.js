import * as postsAPI from '../api/posts';
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
  createPromiseThunkById,
  handleAsyncActionsById,
} from '../lib/asyncUtils';

/* 액션 타입 */
// 포스트 여러 개 조회
const GET_POSTS = 'posts/GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR'; // 요청 실패
// 포스트 하나 조회
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';
// 재로딩 이슈 해결1. 포스트 비우기
// const CLEAR_POST = 'CLEAR_POST';

// thunk를 사용할 때 꼭 모든 액션들에 대해 액션 생성함수를 만들지 않아도 됨
// thunk 함수에서 바로 액션 객체를 만들어도 됨
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById); // 포스트 재로딩 이슈 해결2. id별 처리

// 반복되는 코드를 initial() 함수를 사용해 리팩토링
const initialState = {
  posts: reducerUtils.initial(),
  post: {},
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      // const postsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
      // return postsReducer(state, action);
      // 목록을 요청할 땐 keepData=true -> 재로딩 하되, SUCCESS 떨어지기 전까지 기존 데이터 유지
      return handleAsyncActions(GET_POSTS, 'posts')(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActionsById(GET_POST, 'post')(state, action); // 포스트 재로딩 이슈 해결2. id별 처리
    default:
      return state;
  }
}
