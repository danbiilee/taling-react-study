import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, goToHome } from '../modules/posts';
import Post from '../components/Post';

function PostContainer({ postId }) {
  const { data, loading, error } = useSelector(
    (state) => state.posts.post[postId]
  ) || {
    loading: false,
    data: null,
    error: null,
  }; // 아예 데이터가 존재하지 않을 경우 대비
  const dispatch = useDispatch();

  // 포스트 정보가 바뀔 수 있는 가능성이 있다면 새로 요청하되, 로딩중...은 표시하지 않는 형태로 구현하기
  useEffect(() => {
    if (data) return; // 포스트 재로딩 이슈 해결2. 포스트가 존재하면 요청하지 않음
    dispatch(getPost(postId));
    /* return () => {
      // 재로딩 이슈 해결1. 포스트가 언마운트 될 때마다 포스트를 비워줌
      // -> 이슈: 읽었던 포스트를 불러올 때도 새 요청 하게 됨
      dispatch(clearPost());
    }; */
  }, [postId, dispatch, data]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <>
      <button onClick={() => dispatch(goToHome())}>GO HOME</button>
      <Post post={data} />
    </>
  );
}

export default PostContainer;
