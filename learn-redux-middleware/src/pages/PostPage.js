import React from 'react';
import PostContainer from '../containers/PostContainer';

const PostPage = ({ match }) => {
  console.log('match', match);
  const { id } = match.params;
  return <PostContainer postId={parseInt(id, 10)} />;
};

export default PostPage;
