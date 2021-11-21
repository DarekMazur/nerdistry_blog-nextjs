import React from 'react';
import slugify from 'slugify';
import SinglePost from '../../components/organisms/SinglePost/SinglePost';

const SinglePostPage = ({ getPost, PostIndex, getInitialPosts }) => {
  const pagination = {
    nextElement: PostIndex < getInitialPosts.length - 1 ? getInitialPosts[PostIndex + 1].Title : 'last',
    previousElement: PostIndex > 0 ? getInitialPosts[PostIndex - 1].Title : 'first',
  };

  return <SinglePost title={getPost.Title} pagination={pagination} />;
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

  const resPos = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts?_sort=published_at:DESC&_limit=5`);
  const posts = await resPos.json();

  const getNumberOfPosts = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts/count`);
  const postsCount = await getNumberOfPosts.json();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts`);
  const getInitialPosts = await res.json();

  const getPost = getInitialPosts.find((post) => slugify(post.Title, { remove: /[*+~.()'"!:@]/g, lower: true }) === slug);

  const PostIndex = getInitialPosts.indexOf(getPost);

  return {
    props: {
      posts,
      postsCount,
      getPost,
      PostIndex,
      getInitialPosts,
    },
  };
}

export default SinglePostPage;
