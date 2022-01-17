import React, { useEffect, useState } from 'react';

export const ContentContext = React.createContext({
  isSingle: false,
  isOpen: false,
  posts: [],
  postsCount: 0,
  singlePost: {},
  getIsSingle: () => {},
  getInitialPosts: () => {},
  getPost: () => {},
  getCategoriesPosts: () => {},
  handleClick: () => {},
});

const ContentPovider = ({ children, allPosts, postsCountValue }) => {
  const [posts, setPosts] = useState(allPosts && allPosts.length > 0 ? [...allPosts] : []);
  const [singlePost, setSinglePost] = useState({});
  const [isSingle, setIsSingle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const postsCount = postsCountValue;

  const getIsSingle = (value) => {
    setIsSingle(value);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const getInitialPosts = () => {
    setPosts(allPosts.length > 0 ? [...allPosts] : []);
    setIsSingle(false);
  };

  const getPost = async (title) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts`);
    const posts = await res.json();
    const singlePost = posts.filter((post) => post.Title === title);
    setSinglePost(...singlePost);
  };

  const getCategoriesPosts = async (name) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts?_sort=published_at:DESC&_categories.Name=${name}`);
    const posts = await res.json();
    setPosts(posts);
  };

  return (
    <ContentContext.Provider
      value={{
        isSingle,
        isOpen,
        posts,
        postsCount,
        singlePost,
        getIsSingle,
        getInitialPosts,
        getPost,
        getCategoriesPosts,
        handleClick,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentPovider;
