import React from 'react';
import slugify from 'slugify';
import { dateToDisplay, readingTime, shortenContent } from '../../../utils/helpers';
import { CTAbutton } from '../../atoms/CTAbutton/CTAbutton.style';
import { PostContent, PostImage, PostItemContentWrapper, PostListItemWrapper, PostTeaser, PostTitleWrapper } from './PostsListItem.style';

const PostsListItem = ({ title, description, content, publishdate, photo }) => {
  readingTime(content);

  return (
    <PostListItemWrapper>
      {/* {console.log(slugify(title, { remove: /[*+~.()'"!:@]/g, lower: true }))} */}
      <PostTitleWrapper>
        <h4>{title}</h4>
        <p>{dateToDisplay(publishdate)}</p>
      </PostTitleWrapper>
      <PostItemContentWrapper>
        <PostImage imageUrl={photo}></PostImage>
        <PostContent>
          <PostTeaser>
            <p>{description ? description : shortenContent(content)}</p>
            <p>Read in {readingTime(content)} minutes</p>
          </PostTeaser>
          <CTAbutton>Read more</CTAbutton>
        </PostContent>
      </PostItemContentWrapper>
    </PostListItemWrapper>
  );
};

export default PostsListItem;
