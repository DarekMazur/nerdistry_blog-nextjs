import React from 'react';
import slugify from 'slugify';
import SectionTitle from '../../components/molecules/SectionTitle/SectionTitle';
import PostsList from '../../components/organisms/PostsList/PostsList';

export const CategoryContext = React.createContext({
  categoryPosts: [],
});

const CategoryPosts = ({ getCategory, getPosts }) => {
  return (
    <CategoryContext.Provider
      value={{
        categoryPosts: getPosts,
      }}
    >
      <SectionTitle title={`Posts from category ${getCategory.Name}:`} />
      <PostsList isBlog="category" />
    </CategoryContext.Provider>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/categories`);
  const categories = await res.json();

  const paths = categories.map((category) => {
    return {
      params: {
        categorySlug: slugify(category.Name, { remove: /[*+~.()'"!:@]/g, lower: true }),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.categorySlug;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/categories`);
  const getAllCategories = await res.json();

  const getCategory = getAllCategories.find((category) => slugify(category.Name, { remove: /[*+~.()'"!:@]/g, lower: true }) === slug);

  console.log(getCategory.Name);

  const postRes = await fetch(`http://localhost:1337/posts?categories.Name=${getCategory.Name}`);
  const getPosts = await postRes.json();

  return {
    props: {
      getCategory,
      getPosts,
    },
  };
}

export default CategoryPosts;
