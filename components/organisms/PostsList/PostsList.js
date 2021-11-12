import React from 'react';
import PostsListItem from '../../molecules/PostsListItem/PostsListItem';
import { PostListWrapper } from './PostsList.style';

const PostsList = () => {
  return (
    <PostListWrapper>
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
    </PostListWrapper>
  );
};

export default PostsList;
