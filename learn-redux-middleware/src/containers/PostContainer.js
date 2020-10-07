import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../components/Post';
import { getClear, getPost } from '../modules/posts';

const PostContainer = ({ postId }) => {
  const { loading, data, error } = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
    return () => {
      dispatch(getClear());
    };
  }, [dispatch, postId]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return <Post post={data} />;
};

export default PostContainer;
