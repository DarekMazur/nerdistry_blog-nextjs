import React, { useContext } from 'react';
import { PostsContext } from '../../../pages';
import PostsListItem from '../../molecules/PostsListItem/PostsListItem';
import { PostListWrapper } from './PostsList.style';

const PostsList = () => {
  const { posts } = useContext(PostsContext);
  const latestPosts = posts.reverse().slice(0, 5);

  return (
    <PostListWrapper>
      {latestPosts.map(({ id, Title, Description, Content, published_at, CoverImage, MainCategory, SecondaryCategory, Tags }) => (
        <PostsListItem
          key={id}
          title={Title}
          content={Content}
          publishdate={published_at}
          photo={CoverImage.url}
          category={[MainCategory, SecondaryCategory]}
          description={Description}
          tags={Tags}
        />
      ))}
    </PostListWrapper>
  );
};

export default PostsList;
