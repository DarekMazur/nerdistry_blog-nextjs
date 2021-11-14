import React from 'react';
import { CircleImage } from '../../atoms/CircleImage/CircleImage.style';
import { HeptagonImage } from '../../atoms/HeptagonImage/HeptagonImage.style';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
import PostsList from '../PostsList/PostsList';
import { LatestBlogWrapper } from './LatestBlog.style';

const LatestBlog = () => {
  return (
    <LatestBlogWrapper>
      <CircleImage />
      <HeptagonImage />
      <SectionTitle title="Lorem Ipsum" description="Dolor Sit Amet" />
      <PostsList />
    </LatestBlogWrapper>
  );
};

export default LatestBlog;
