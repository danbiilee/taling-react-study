import React from 'react';
import PostContainer from '../containers/PostContainer';

export default function PostPage({ match }) {
  const { id } = match.params;

  // URL 파라미터 값은 문자열이므로 숫자로 변환
  return <PostContainer postId={parseInt(id, 10)} />;
}
