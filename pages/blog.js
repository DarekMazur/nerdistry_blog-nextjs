import React, { useContext, useEffect } from 'react';
import PostsList from '../components/organisms/PostsList/PostsList';
import { ContentContext } from '../providers/ContentProvider';

const Blog = () => {
  const { getInitialPosts } = useContext(ContentContext);

  useEffect(() => {
    getInitialPosts();
  }, []);
  return <PostsList isBlog />;
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts?_sort=published_at:DESC&_limit=5`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  });
  const posts = await res.json();

  const getNumberOfPosts = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts/count`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  });
  const postsCount = await getNumberOfPosts.json();

  return {
    props: {
      posts,
      postsCount,
    },
  };
}

export default Blog;
