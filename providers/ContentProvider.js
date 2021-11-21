import React, { useEffect, useState } from 'react';

export const ContentContext = React.createContext({
  isSingle: false,
  posts: [],
  postsCount: 0,
  singlePost: {},
  getIsSingle: () => {},
  getInitialPosts: () => {},
  getPost: () => {},
  getCategoriesPosts: () => {},
});

const ContentPovider = ({ children, allPosts, postsCountValue }) => {
  const [posts, setPosts] = useState([...allPosts]);
  const [singlePost, setSinglePost] = useState({});
  const [postsCount, setPostsCount] = useState(postsCountValue);
  const [isSingle, setIsSingle] = useState(false);

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

  const getIsSingle = () => {
    setIsSingle(true);
  };

  const getInitialPosts = () => {
    setPosts([...allPosts]);
    setIsSingle(false);
  };

  const getPost = async (title) => {
    const res = await fetch(`http://localhost:1337/posts`);
    const posts = await res.json();
    const singlePost = posts.filter((post) => post.Title === title);
    setSinglePost(...singlePost);
  };

  const getCategoriesPosts = async (name) => {
    const res = await fetch(`http://localhost:1337/posts?_sort=published_at:DESC&_categories.Name=${name}`);
    const posts = await res.json();
    setPosts(posts);
  };

  // const getAllposts = () => {
  //   const res = await fetch(`http://localhost:1337/posts`);
  //   const posts = await res.json();
  // }

  // const getPostsCount = (count) => {
  //   setPostsCount(count);
  // };

  return (
    <ContentContext.Provider
      value={{
        isSingle,
        posts,
        postsCount,
        singlePost,
        getIsSingle,
        getInitialPosts,
        getPost,
        getCategoriesPosts,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentPovider;
