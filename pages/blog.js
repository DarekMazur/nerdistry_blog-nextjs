import React from 'react';
import PostsList from '../components/organisms/PostsList/PostsList';

export const BlogContext = React.createContext({
  blogPosts: [],
  numberOfPosts: 0,
});

// const Blog = ({ blogPosts, numberOfPosts }) => {
//   return (
//     <BlogContext.Provider
//       value={{
//         blogPosts,
//         numberOfPosts,
//       }}
//     >
//       <PostsList isBlog />
//     </BlogContext.Provider>
//   );
// };

const Blog = () => {
  return <PostsList isBlog />;
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts?_sort=published_at:DESC&_limit=5`);
  const posts = await res.json();

  const getNumberOfPosts = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts/count`);
  const postsCount = await getNumberOfPosts.json();

  return {
    props: {
      posts,
      postsCount,
    },
  };
}

export default Blog;
