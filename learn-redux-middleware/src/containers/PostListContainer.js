import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/posts';

function PostListContainer() {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    // if (data) return; // 재로딩 이슈 해결1. 이미 데이터가 있는 경우 재로딩하지 않음
    dispatch(getPosts());
  }, [dispatch]);

  // 재로딩 이슈 해결2. 로딩중이면서 데이터가 없을 때만(최초 로딩 시) 로딩중... 표시
  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러발생!</div>;
  if (!data) return null;
  return <PostList posts={data} />;
}

export default PostListContainer;
