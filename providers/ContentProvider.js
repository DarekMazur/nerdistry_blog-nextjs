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
