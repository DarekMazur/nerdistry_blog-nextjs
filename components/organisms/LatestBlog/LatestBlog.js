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
      <SectionTitle title="Ostanio na blogu" description="Co nowego, czyli" />
      <PostsList />
    </LatestBlogWrapper>
  );
};

export default LatestBlog;
