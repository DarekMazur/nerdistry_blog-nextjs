import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { PostContext } from '../../../pages/posts/[postSlug]';
import { dateToDisplay } from '../../../utils/helpers';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
import { SinglePostHero, SinglePostWrapper, SinglePostContent, SinglePostCategoryLink } from './SinglePost.style';
import slugify from 'slugify';
import { ContentContext } from '../../../providers/ContentProvider';

const SinglePost = ({ title }) => {
  const { getPost } = useContext(ContentContext);
  const [singlePostItem, setSinglePostItem] = useState({});
  const { singlePost } = useContext(ContentContext);

  useEffect(() => {
    getPost(title);
  }, []);

  useEffect(() => {
    setSinglePostItem(singlePost);
  }, [singlePost]);

  return (
    <SinglePostWrapper>
      {singlePostItem.length !== 0 ? (
        <>
          <SinglePostHero background={singlePostItem.CoverImage?.url}>
            <SectionTitle
              title={singlePostItem.Title}
              description={
                singlePostItem.categories ? (
                  <p>
                    {singlePostItem.categories.map((category) => (
                      <Link href={`/category/${slugify(category.Name, { remove: /[*+~.()'"!:@]/g, lower: true })}`}>
                        <SinglePostCategoryLink>{category.Name}</SinglePostCategoryLink>
                      </Link>
                    ))}
                  </p>
                ) : null
              }
            />
            <p>{`${dateToDisplay(singlePostItem.published_at)} by ${singlePostItem.User?.username}`}</p>
          </SinglePostHero>
          <SinglePostContent>
            <Markdown children={singlePostItem.Content} />
          </SinglePostContent>
        </>
      ) : null}
    </SinglePostWrapper>
  );
};

export default SinglePost;
