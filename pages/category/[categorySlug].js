import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import slugify from 'slugify';
import { CategoryDescription } from '../../components/atoms/CategoryDescription/CategoryDescription';
import { Slogan } from '../../components/atoms/Slogan/Slogan.style';
import { TitleH4 } from '../../components/atoms/TitleH4/TitleH4.style';
import SectionTitle from '../../components/molecules/SectionTitle/SectionTitle';
import PostsList from '../../components/organisms/PostsList/PostsList';
import { ContentContext } from '../../providers/ContentProvider';

const CategoryPosts = ({ getCategory }) => {
  const { getCategoriesPosts, getIsSingle } = useContext(ContentContext);
  const router = useRouter();
  const route = router.query.categorySlug;

  useEffect(() => {
    getIsSingle(false);
  }, []);

  useEffect(() => {
    getCategoriesPosts(getCategory.Name);
  }, [route]);

  return (
    <>
      <SectionTitle title={`Posts from category ${getCategory.Name}:`} />
      <CategoryDescription>{getCategory.Description}</CategoryDescription>
      <PostsList isBlog="category" />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/categories`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  });
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

  const resCat = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/categories`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  });
  const getAllCategories = await resCat.json();

  const getCategory = getAllCategories.find((category) => slugify(category.Name, { remove: /[*+~.()'"!:@]/g, lower: true }) === slug);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts?_sort=published_at:DESC&_limit=5`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  });
  const posts = await res.json();

  const getNumberOfPosts = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts/count`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  });
  const postsCount = await getNumberOfPosts.json();

  return {
    props: {
      posts,
      postsCount,
      getCategory,
    },
  };
}

export default CategoryPosts;
