import React, { useEffect, useState } from 'react';

export const ContentContext = React.createContext({
  posts: [],
  postsCount: 0,
  getAllPosts: () => {},
  getPost: () => {},
  getCategoriesPosts: () => {},
});

const ContentPovider = ({ children, allPosts, postsCountValue }) => {
  const [posts, setPosts] = useState([...allPosts]);
  const [postsCount, setPostsCount] = useState(postsCountValue);

  // useEffect(() => {
  //   setPosts([...allPosts]);
  //   setPostsCount(postsCountValue);
  // }, []);

  //   const getPost = async (title) => {
  //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts?_sort=published_at:DESC`);
  //     const allPosts = await res.json();
  //     const singlePost = allPosts.filter((post) => post.Title === title);
  //     setPosts(singlePost);
  //   };

  const getAllPosts = () => {
    setPosts([...allPosts]);
  };

  const getPost = (title) => {
    const singlePost = posts.filter((post) => post.Title === title);
    setPosts(singlePost);
  };

  const getCategoriesPosts = async (name) => {
    const res = await fetch(`http://localhost:1337/posts?categories.Name=${name}`);
    const posts = await res.json();
    setPosts(posts);
  };

  // const getPostsCount = (count) => {
  //   setPostsCount(count);
  // };

  return (
    <ContentContext.Provider
      value={{
        posts,
        postsCount,
        getAllPosts,
        getPost,
        getCategoriesPosts,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentPovider;
