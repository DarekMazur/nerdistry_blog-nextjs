import React, { useContext, useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { PostContext } from '../../../pages/posts/[postSlug]';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
import { SinglePostHero, SinglePostWrapper, SinglePostContent } from './SinglePost.style';

const SinglePost = () => {
  const { post } = useContext(PostContext);

  return (
    <SinglePostWrapper>
      {post.length !== 0 ? (
        <>
          <SinglePostHero background={post.CoverImage.url}>
            <SectionTitle title={post.Title} description="Dolor sit amet" />
          </SinglePostHero>
          <SinglePostContent>
            <Markdown children={post.Content} />
          </SinglePostContent>
        </>
      ) : null}
    </SinglePostWrapper>
  );
};

export default SinglePost;
