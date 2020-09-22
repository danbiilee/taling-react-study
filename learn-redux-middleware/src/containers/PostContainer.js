import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, clearPost } from '../modules/posts';
import Post from '../components/Post';

function PostContainer({ postId }) {
  const { data, loading, error } = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
    return () => {
      // 재로딩 이슈 해결1. 포스트가 언마운트 될 때마다 포스트를 비워줌
      // -> 이슈: 읽었던 포스트를 불러올 때도 새 요청 하게 됨
      dispatch(clearPost());
    };
  }, [postId, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <Post post={data} />;
}

export default PostContainer;
