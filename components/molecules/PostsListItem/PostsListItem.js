import React from 'react';
import slugify from 'slugify';
import { dateToDisplay, readingTime, shortenContent } from '../../../utils/helpers';
import { CTAbutton } from '../../atoms/CTAbutton/CTAbutton.style';
import { TitleH4 } from '../../atoms/TitleH4/TitleH4.style';
import PostContentList from '../PostContentList/PostContentList';
import { PostContent, PostImage, PostItemContentWrapper, PostListItemWrapper, PostTeaser, PostTitleWrapper } from './PostsListItem.style';

const PostsListItem = ({ title, content, publishdate, photo, category, description, tags }) => {
  readingTime(content);

  const tagsArray = tags ? tags.split(', ') : null;

  return (
    <PostListItemWrapper>
      {/* {console.log(slugify(title, { remove: /[*+~.()'"!:@]/g, lower: true }))} */}
      <PostTitleWrapper>
        <TitleH4>{title}</TitleH4>
        <p>{dateToDisplay(publishdate)}</p>
      </PostTitleWrapper>
      <PostItemContentWrapper>
        <PostImage imageUrl={photo}></PostImage>
        <PostContent>
          <PostContentList list={category} />
          <PostTeaser>
            <p>{description ? description : shortenContent(content)}</p>
            <p>Read in {readingTime(content)} minutes</p>
          </PostTeaser>
          <PostContentList list={tagsArray} isTagList />
          <CTAbutton>Read more</CTAbutton>
        </PostContent>
      </PostItemContentWrapper>
    </PostListItemWrapper>
  );
};

export default PostsListItem;
