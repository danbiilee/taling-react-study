import * as postApi from '../api/posts'; // api/posts 안의 함수 모두 불러오기
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from '../lib/asyncUtils';

// 액션 타입
// 포스트 목록 조회
const GET_POSTS = 'posts/GET_POSTS';
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR';
// 포스트 하나 조회
const GET_POST = 'posts/GET_POST';
const GET_POST_SUCCESS = 'posts/GET_POST_SUCCESS';
const GET_POST_ERROR = 'posts/GET_POST_ERROR';
// 포스트 비우기
const CLEAR_POST = 'posts/CLEAR_POST';

// thunk 함수
export const getPosts = createPromiseThunk(GET_POSTS, postApi.getPosts);
export const getPost = createPromiseThunk(GET_POST, postApi.getPostById);

export const getClear = () => ({ type: CLEAR_POST });

// 초깃값
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

// 리듀서
export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActions(GET_POST, 'post')(state, action);
    case CLEAR_POST:
      return {
        ...state,
        post: reducerUtils.initial(),
      };
    default:
      return state;
  }
}
