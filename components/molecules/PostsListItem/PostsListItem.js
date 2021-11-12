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

const PostsListItem = ({ title, content, publishdate, photo, author, authorPhoto }) => {
  const shortenContent = (content) => {
    const contentToArray = content.split(' ');
    const shorterContentArray = contentToArray.slice(0, 29);
    const shorterContent = `${shorterContentArray.join(' ')} [...]`;
    return shorterContent;
  };

  const readingTime = (content) => {
    const words = content.trim().split(/\s+/).length;
    const wps = 225;
    const estimateReadingTime = Math.ceil(words / wps);
    return estimateReadingTime;
  };

  return (
    <PostListItemWrapper>
      <PostTitleWrapper>
        <h4>{title}</h4>
        <p>{publishdate}</p>
      </PostTitleWrapper>
      <PostItemContentWrapper>
        <PostImage imageUrl={photo}></PostImage>
        <PostContent>
          <PostTeaser>
            <p>{shortenContent(content)}</p>
            <p>Read in {readingTime(content)} minutes</p>
          </PostTeaser>
          <PostAuthor>
            <Avatar imageUrl={authorPhoto} />
            <AuthorName>{author}</AuthorName>
          </PostAuthor>
          <CTAbutton>Read more</CTAbutton>
        </PostContent>
      </PostItemContentWrapper>
    </PostListItemWrapper>
  );
};

export default PostsListItem;
