import React, { useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PostsContext } from '../../../pages';
import { BlogContext } from '../../../pages/blog';
import { CategoryContext } from '../../../pages/category/[categorySlug]';
import { TitleH4 } from '../../atoms/TitleH4/TitleH4.style';
import Loading from '../../molecules/Loading/Loaging';
import PostsListItem from '../../molecules/PostsListItem/PostsListItem';
import { PostListWrapper } from './PostsList.style';

export const PostDetailsContext = React.createContext({
  details: {
    categoriesItems: [],
    tagsItems: '',
  },
});

const PostsList = ({ isBlog }) => {
  const { posts, blogPosts, categoryPosts, numberOfPosts } = useContext(
    isBlog ? (isBlog === 'category' ? CategoryContext : BlogContext) : PostsContext
  );
  const postsToDisplay = isBlog ? (isBlog === 'category' ? categoryPosts : blogPosts) : posts;

  const [postsList, setPostList] = useState([...postsToDisplay]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setPostList(postsToDisplay);
  }, [postsToDisplay]);

  const getMorePosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts?_sort=published_at:DESC&_start=${postsList.length}&_limit=5`);
    const newPosts = await res.json();
    setPostList((postsList) => [...postsList, ...newPosts]);
  };

  useEffect(() => {
    setHasMore(numberOfPosts > postsList.length);
  }, [postsList]);

  return (
    <PostListWrapper>
      <InfiniteScroll
        dataLength={postsList.length}
        next={getMorePosts}
        hasMore={hasMore}
        loader={<Loading />}
        endMessage={isBlog ? <TitleH4 isSmall>That's all for now. Return later for more content :)</TitleH4> : null}
      >
        {postsList.map(({ id, Title, Description, Content, published_at, CoverImage, categories, Tags }) => (
          <PostDetailsContext.Provider
            value={{
              details: {
                categoriesItems: categories,
                tagsItems: Tags,
              },
            }}
          >
            <PostsListItem key={id} title={Title} content={Content} publishdate={published_at} photo={CoverImage.url} description={Description} />
          </PostDetailsContext.Provider>
        ))}
      </InfiniteScroll>
    </PostListWrapper>
  );
};

export default PostsList;
