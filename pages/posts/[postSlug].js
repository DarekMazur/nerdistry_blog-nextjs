import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import slugify from 'slugify';
import SinglePost from '../../components/organisms/SinglePost/SinglePost';

export const PostContext = React.createContext({
  posts: [],
});

const SinglePostPage = ({ getPost }) => {
  const router = useRouter();
  const route = router.query.postSlug;

  const [post, setPostList] = useState([]);

  const getPosts = async () => {
    const res = await fetch(`http://localhost:1337/posts?Title=${getPost.Title}`);
    const post = await res.json();
    setPostList(post);
  };

  useEffect(() => {
    getPosts();
  }, [route]);

  return (
    <PostContext.Provider
      value={{
        post,
      }}
    >
      <SinglePost />
    </PostContext.Provider>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts`);
  const posts = await res.json();

  const paths = posts.map((post) => {
    return {
      params: {
        postSlug: slugify(post.Title, { remove: /[*+~.()'"!:@]/g, lower: true }),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.postSlug;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts`);
  const getAllposts = await res.json();

  const getPost = getAllposts.find((post) => slugify(post.Title, { remove: /[*+~.()'"!:@]/g, lower: true }) === slug);

  return {
    props: {
      getPost,
    },
  };
}

export default SinglePostPage;
