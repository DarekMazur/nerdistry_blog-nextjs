import React from 'react';
import { CircleImage } from '../../atoms/CircleImage/CircleImage.style';
import { HeptagonImage } from '../../atoms/HeptagonImage/HeptagonImage.style';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
import PostsList from '../PostsList/PostsList';
import { LatestBlogWrapper } from './LatestBlog.style';

const LatestBlog = ({ posts }) => {
  const latestPosts = posts.reverse().slice(0, 5);

  return (
    <LatestBlogWrapper>
      <CircleImage />
      <HeptagonImage />
      <SectionTitle title="Lorem Ipsum" description="Dolor Sit Amet" />
      <PostsList posts={latestPosts} />
    </LatestBlogWrapper>
  );
};

export default LatestBlog;
