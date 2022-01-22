import React, { useContext, useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ContentContext } from '../../../providers/ContentProvider';
import PostsListEmpty from '../../atoms/PostsListEmpty/PostsListEmpty';
import { TitleH4 } from '../../atoms/TitleH4/TitleH4.style';
import Loading from '../../molecules/Loading/Loaging';
import PostsListItem from '../../molecules/PostsListItem/PostsListItem';
import { PostListWrapper } from './PostsList.style';

const PostsList = ({ isBlog, isSearch }) => {
  const { posts, postsCount, searchData } = useContext(ContentContext);

  const [postsList, setPostList] = useState(isSearch ? searchData : posts);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setPostList(isSearch ? searchData : posts);
  }, [posts, searchData]);

  const getMorePosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts?_sort=published_at:DESC&_start=${postsList.length}&_limit=5`);
    const newPosts = await res.json();
    setPostList((postsList) => [...postsList, ...newPosts]);
  };

  useEffect(() => {
    setHasMore(postsCount > postsList.length);
  }, [postsList]);

  return (
    <PostListWrapper>
      {postsList && postsList.length !== 0 ? (
        <InfiniteScroll
          dataLength={postsList.length}
          next={getMorePosts}
          hasMore={isBlog && isBlog !== 'category' ? hasMore : false}
          loader={<Loading />}
          endMessage={isBlog ? <TitleH4 isSmall>That's all for now. Return later for more content :)</TitleH4> : null}
        >
          {postsList.map(({ id, Title }) => (
            <PostsListItem key={id} title={Title} />
          ))}
        </InfiniteScroll>
      ) : (
        <PostsListEmpty />
      )}
    </PostListWrapper>
  );
};

export default PostsList;
