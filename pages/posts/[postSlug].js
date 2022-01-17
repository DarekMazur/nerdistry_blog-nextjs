import React from 'react';
import slugify from 'slugify';
import SinglePost from '../../components/organisms/SinglePost/SinglePost';

const SinglePostPage = ({ post, PostIndex, initialPosts }) => {
  const pagination = {
    nextElement: PostIndex < initialPosts.length - 1 ? initialPosts[PostIndex + 1].Title : 'last',
    previousElement: PostIndex > 0 ? initialPosts[PostIndex - 1].Title : 'first',
  };

  return <SinglePost title={post.Title} pagination={pagination} />;
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts`);

  let paths = [];

  const posts = await res.json();

  if (posts.length > 0) {
    paths = posts.map((post) => {
      return {
        params: {
          postSlug: slugify(post.Title, { remove: /[*+~.()'"!:@]/g, lower: true }),
        },
      };
    });
  }

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
  const initialPosts = await res.json();

  const post = initialPosts.find((post) => slugify(post.Title, { remove: /[*+~.()'"!:@]/g, lower: true }) === slug);

  const PostIndex = initialPosts.indexOf(post);

  return {
    props: {
      posts,
      postsCount,
      post,
      PostIndex,
      initialPosts,
    },
  };
}

export default SinglePostPage;
