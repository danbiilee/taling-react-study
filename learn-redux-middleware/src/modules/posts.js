import * as postsAPI from '../api/posts';
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
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

// thunk를 사용할 때 꼭 모든 액션들에 대해 액션 생성함수를 만들지 않아도 됨
// thunk 함수에서 바로 액션 객체를 만들어도 됨
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      //return handleAsyncActions(GET_POSTS, 'posts')(state, action);
      // 목록을 요청할 땐 keepData=true -> 재로딩 하되, SUCCESS 떨어지기 전까지 기존 데이터 유지
      const postsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
      return postsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      //return handleAsyncActions(GET_POST, 'post')(state, action);
      const postReducer = handleAsyncActions(GET_POST, 'post');
      return postReducer(state, action);
    default:
      return state;
  }
}
