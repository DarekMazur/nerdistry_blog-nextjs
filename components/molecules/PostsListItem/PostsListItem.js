import React from 'react';
import slugify from 'slugify';
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

const PostsListItem = ({ title, description, content, publishdate, photo, author, authorPhoto }) => {
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

  const PublishAtDay = new Date(publishdate).getDate();
  const PublishAtMonth = new Date(publishdate).getMonth() + 1;
  const PublishAtYear = new Date(publishdate).getFullYear();
  const dateToDisplay = `${PublishAtDay}.${PublishAtMonth}.${PublishAtYear}`;

  return (
    <PostListItemWrapper>
      {/* {console.log(slugify(title, { remove: /[*+~.()'"!:@]/g, lower: true }))} */}
      <PostTitleWrapper>
        <h4>{title}</h4>
        <p>{dateToDisplay}</p>
      </PostTitleWrapper>
      <PostItemContentWrapper>
        {console.log(photo)}
        <PostImage imageUrl={photo}></PostImage>
        <PostContent>
          <PostTeaser>
            <p>{description ? description : shortenContent(content)}</p>
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
