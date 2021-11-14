import React, { useContext } from 'react';
import { PostsContext } from '../../../pages';
import { BlogContext } from '../../../pages/blog';
import PostsListItem from '../../molecules/PostsListItem/PostsListItem';
import { PostListWrapper } from './PostsList.style';

const PostsList = ({ isBlog }) => {
  const { posts, allPosts } = useContext(isBlog ? BlogContext : PostsContext);

  const postsToDisplay = isBlog ? allPosts : posts;

  return (
    <PostListWrapper>
      {postsToDisplay.map(({ id, Title, Description, Content, published_at, CoverImage, MainCategory, SecondaryCategory, Tags }) => (
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
