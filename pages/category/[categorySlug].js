import React from 'react';
import { useRouter } from 'next/router';

const CategoryPosts = () => {
  const router = useRouter();
  const categorySlug = router.query.categorySlug;
  return (
    <h3>
      Posts from category <strong>{categorySlug}</strong>:
    </h3>
  );
};

export default CategoryPosts;
