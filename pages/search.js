import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import PostsList from '../components/organisms/PostsList/PostsList';
import { ContentContext } from '../providers/ContentProvider';

const SearchPage = () => {
  const { getSearchData } = useContext(ContentContext);
  const router = useRouter();
  const route = router.query;

  useEffect(() => {
    axios.post('api/search', { search: route.results }).then((res) => {
      getSearchData(res.data);
    });
  }, [route]);

  return <PostsList isBlog isSearch />;
};

export default SearchPage;
