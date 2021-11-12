import React from 'react';
import { fakePosts } from '../../../assets/data/fakeData';
import PostsListItem from '../../molecules/PostsListItem/PostsListItem';
import { PostListWrapper } from './PostsList.style';

const PostsList = () => {
  return (
    <PostListWrapper>
      {fakePosts.map(({ id, title, content, publishdate, photo, author, authorPhoto }) => (
        <PostsListItem key={id} title={title} content={content} publishdate={publishdate} photo={photo} author={author} authorPhoto={authorPhoto} />
      ))}
    </PostListWrapper>
  );
};

export default PostsList;
