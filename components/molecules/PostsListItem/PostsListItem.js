import React from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import { dateToDisplay, readingTime, shortenContent } from '../../../utils/helpers';
import { CTAbutton } from '../../atoms/CTAbutton/CTAbutton.style';
import { TitleH4 } from '../../atoms/TitleH4/TitleH4.style';
import PostContentList from '../PostContentList/PostContentList';
import { PostContent, PostImage, PostItemContentWrapper, PostListItemWrapper, PostTeaser, PostTitleWrapper } from './PostsListItem.style';

const PostsListItem = ({ title, content, publishdate, photo, description }) => {
  readingTime(content);

  return (
    <PostListItemWrapper>
      <PostTitleWrapper>
        <TitleH4>{title}</TitleH4>
        <p>{dateToDisplay(publishdate)}</p>
      </PostTitleWrapper>
      <PostItemContentWrapper>
        <PostImage imageUrl={photo}></PostImage>
        <PostContent>
          <PostContentList />
          <PostTeaser>
            <p>{description ? description : shortenContent(content)}</p>
            <p>Read in {readingTime(content)} minutes</p>
          </PostTeaser>
          <PostContentList isTagList />
          <Link href={`/posts/${slugify(title, { remove: /[*+~.()'"!:@]/g, lower: true })}`}>
            <CTAbutton as="a">Read more</CTAbutton>
          </Link>
        </PostContent>
      </PostItemContentWrapper>
    </PostListItemWrapper>
  );
};

export default PostsListItem;
