import React from 'react';
import Highlight from '../components/organisms/Highlight/Highlight';
import LatestBlog from '../components/organisms/LatestBlog/LatestBlog';

export const PostsContext = React.createContext({
  posts: [],
});

const Home = ({ posts }) => {
  return (
    <PostsContext.Provider
      value={{
        posts,
      }}
    >
      {posts.length >= 3 ? <Highlight /> : null}
      <LatestBlog />
      <section>
        <p>lorem Ipsum</p>
      </section>
    </PostsContext.Provider>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/posts');
  const posts = await res.json();

  return {
    props: { posts },
  };
}

export default Home;
