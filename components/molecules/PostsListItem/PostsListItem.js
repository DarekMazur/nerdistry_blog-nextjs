import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import gsap from 'gsap';
import { dateToDisplay, readingTime, shortenContent } from '../../../utils/helpers';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { CTAbutton } from '../../atoms/CTAbutton/CTAbutton.style';
import { TitleH4 } from '../../atoms/TitleH4/TitleH4.style';
import PostContentList from '../PostContentList/PostContentList';
import { PostContent, PostImage, PostItemContentWrapper, PostListItemWrapper, PostTeaser, PostTitleWrapper } from './PostsListItem.style';

gsap.registerPlugin(ScrollTrigger);

const PostsListItem = ({ title }) => {
  const article = useRef();

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

  useEffect(() => {
    gsap.fromTo(
      article.current.children,
      { x: '+=150%', autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3',
        stagger: 0.1,
        scrollTrigger: {
          trigger: article.current,
          start: 'top center+=100px',
        },
      }
    );
  }, []);

  const details = {
    categoriesItems: singlePost.categories,
    tagsItems: singlePost.Tags,
  };

  return (
    <PostListItemWrapper>
      <PostTitleWrapper>
        <Link href={singlePost.Title ? `/posts/${slugify(singlePost.Title || '', { remove: /[*+~.()'"!:@]/g, lower: true })}` : ''}>
          <TitleH4 isLink>{singlePost.Title ? singlePost.Title : 'loading...'}</TitleH4>
        </Link>
        <p>{singlePost.published_at ? dateToDisplay(singlePost.published_at) : 'loading...'}</p>
      </PostTitleWrapper>
      <PostItemContentWrapper ref={article}>
        <PostImage imageUrl={singlePost.CoverImage?.url} />
        <PostContent>
          <PostContentList details={details} />
          <PostTeaser>
            <p>{singlePost.Content ? (singlePost.Description ? singlePost.Description : shortenContent(singlePost.Content)) : 'loading...'}</p>
            <p>{singlePost.Content ? `Read in ${readingTime(singlePost.Content)} minutes` : 'calculating...'}</p>
          </PostTeaser>
          <PostContentList isTagList details={details} />
          <Link href={singlePost.Title ? `/posts/${slugify(singlePost.Title || '', { remove: /[*+~.()'"!:@]/g, lower: true })}` : ''}>
            <CTAbutton as="a">Read more</CTAbutton>
          </Link>
        </PostContent>
      </PostItemContentWrapper>
    </PostListItemWrapper>
  );
};

export default PostsListItem;
