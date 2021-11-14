import React from 'react';
import PostsList from '../components/organisms/PostsList/PostsList';

export const BlogContext = React.createContext({
  allPosts: [],
});

const Blog = ({ allPosts }) => {
  return (
    <BlogContext.Provider
      value={{
        allPosts,
      }}
    >
      <PostsList isBlog />
    </BlogContext.Provider>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts?_sort=published_at:DESC`);
  const allPosts = await res.json();

  return {
    props: {
      allPosts,
    },
  };
}

export default Blog;
