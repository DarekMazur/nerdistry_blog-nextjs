import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '../../../pages/posts/[postSlug]';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
import { SinglePostHero, SinglePostWrapper, SinglePostContent } from './SinglePost.style';

const SinglePost = () => {
  const { post } = useContext(PostContext);

  const [postDetails, setPostDetails] = useState(post);

  useEffect(() => {
    setPostDetails(post);
  }, [post]);

  return (
    <SinglePostWrapper>
      {postDetails.length !== 0 ? (
        <>
          <SinglePostHero background={postDetails[0].CoverImage.url}>
            <SectionTitle title={postDetails[0].Title} description="Dolor sit amet" />
          </SinglePostHero>
          <SinglePostContent>{postDetails[0].Content}</SinglePostContent>
        </>
      ) : null}
    </SinglePostWrapper>
  );
};

export default SinglePost;
