import React, { useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PostsContext } from '../../../pages';
import { BlogContext } from '../../../pages/blog';
import PostsListItem from '../../molecules/PostsListItem/PostsListItem';
import { PostListWrapper } from './PostsList.style';

const PostsList = ({ isBlog }) => {
  const { posts, blogPosts, numberOfPosts } = useContext(isBlog ? BlogContext : PostsContext);
  const postsToDisplay = isBlog ? blogPosts : posts;

  const [postsList, setPostList] = useState([...postsToDisplay]);
  const [hasMore, setHasMore] = useState(true);

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
      <InfiniteScroll dataLength={postsList.length} next={getMorePosts} hasMore={hasMore} loader={'Loading...'} endMessage={`That's all :)`}>
        {console.log(`numberOfPosts: ${numberOfPosts}, postsList.length: ${postsList.length}, hasMore: ${hasMore}`)}
        {postsList.map(({ id, Title, Description, Content, published_at, CoverImage, MainCategory, SecondaryCategory, Tags }) => (
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
      </InfiniteScroll>
    </PostListWrapper>
  );
};

export default PostsList;
