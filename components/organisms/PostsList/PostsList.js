import React from 'react';
import PostsListItem from '../../molecules/PostsListItem/PostsListItem';
import { PostListWrapper } from './PostsList.style';

const PostsList = ({ posts }) => {
  return (
    <PostListWrapper>
      {posts.map(({ id, Title, Description, Content, published_at, CoverImage, User }) => (
        <PostsListItem
          key={id}
          title={Title}
          content={Content}
          publishdate={published_at}
          photo={`http://localhost:1337${CoverImage.url}`}
          author={User.username}
          authorPhoto={`http://localhost:1337${User.Avatar.url}`}
          description={Description}
        />
      ))}
    </PostListWrapper>
  );
};

export default PostsList;
