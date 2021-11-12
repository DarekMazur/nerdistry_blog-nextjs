import React from 'react';
import { CTAbutton } from '../../atoms/CTAbutton/CTAbutton.style';
import {
  AuthorName,
  Avatar,
  PostAuthor,
  PostContent,
  PostImage,
  PostItemContentWrapper,
  PostListItemWrapper,
  PostTeaser,
  PostTitleWrapper,
} from './PostsListItem.style';

const PostsListItem = () => {
  return (
    <PostListItemWrapper>
      <PostTitleWrapper>
        <h4>Lorem Ipsum</h4>
        <p>01.01.2021</p>
      </PostTitleWrapper>
      <PostItemContentWrapper>
        <PostImage imageUrl="https://images.unsplash.com/photo-1485856407642-7f9ba0268b51"></PostImage>
        <PostContent>
          <PostTeaser>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
              ipsum dolor sit amet. Lorem ipsum.
            </p>
            <p>Read in 3 minutes</p>
          </PostTeaser>
          <PostAuthor>
            <Avatar imageUrl="/image.jpg" />
            <AuthorName>John Doe</AuthorName>
          </PostAuthor>
          <CTAbutton>Read more</CTAbutton>
        </PostContent>
      </PostItemContentWrapper>
    </PostListItemWrapper>
  );
};

export default PostsListItem;
