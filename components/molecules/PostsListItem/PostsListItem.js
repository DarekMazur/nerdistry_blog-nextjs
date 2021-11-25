import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import { dateToDisplay, readingTime, shortenContent } from '../../../utils/helpers';
import { CTAbutton } from '../../atoms/CTAbutton/CTAbutton.style';
import { TitleH4 } from '../../atoms/TitleH4/TitleH4.style';
import PostContentList from '../PostContentList/PostContentList';
import { PostContent, PostImage, PostItemContentWrapper, PostListItemWrapper, PostTeaser, PostTitleWrapper } from './PostsListItem.style';

const PostsListItem = ({ title }) => {
  const [singlePost, setSinglePost] = useState({});

  const getPost = async (title) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    });
    const posts = await res.json();
    const singlePost = posts.filter((post) => post.Title === title);
    setSinglePost(...singlePost);
  };

  useEffect(() => {
    getPost(title);
  }, []);

  const details = {
    categoriesItems: singlePost.categories,
    tagsItems: singlePost.Tags,
  };

  return (
    <PostListItemWrapper>
      <PostTitleWrapper>
        <Link href={`/posts/${slugify(singlePost.Title || '', { remove: /[*+~.()'"!:@]/g, lower: true })}`}>
          <TitleH4 isLink>{singlePost.Title}</TitleH4>
        </Link>
        <p>{dateToDisplay(singlePost.published_at)}</p>
      </PostTitleWrapper>
      <PostItemContentWrapper>
        <PostImage imageUrl={singlePost.CoverImage?.url}></PostImage>
        <PostContent>
          <PostContentList details={details} />
          <PostTeaser>
            <p>{singlePost.Description ? singlePost.Description : shortenContent(singlePost.Content)}</p>
            <p>Read in {readingTime(singlePost.Content)} minutes</p>
          </PostTeaser>
          <PostContentList isTagList details={details} />
          <Link href={`/posts/${slugify(singlePost.Title || '', { remove: /[*+~.()'"!:@]/g, lower: true })}`}>
            <CTAbutton as="a">Read more</CTAbutton>
          </Link>
        </PostContent>
      </PostItemContentWrapper>
    </PostListItemWrapper>
  );
};

export default PostsListItem;
