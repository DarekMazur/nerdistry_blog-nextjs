import React, { useContext } from 'react';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { PostContext } from '../../../pages/posts/[postSlug]';
import { dateToDisplay } from '../../../utils/helpers';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
import { SinglePostHero, SinglePostWrapper, SinglePostContent } from './SinglePost.style';
import slugify from 'slugify';

const SinglePost = () => {
  const { post } = useContext(PostContext);

  return (
    <SinglePostWrapper>
      {post.length !== 0 ? (
        <>
          <SinglePostHero background={post.CoverImage.url}>
            <SectionTitle
              title={post.Title}
              description={
                post.categories ? (
                  <p>
                    {post.categories.map((category) => (
                      <Link href={`/category/${slugify(category.Name, { remove: /[*+~.()'"!:@]/g, lower: true })}`}>
                        <a>{category.Name}</a>
                      </Link>
                    ))}
                  </p>
                ) : null
              }
            />
            <p>{`${dateToDisplay(post.published_at)} by ${post.User.username}`}</p>
          </SinglePostHero>
          <SinglePostContent>
            <Markdown children={post.Content} />
          </SinglePostContent>
        </>
      ) : null}
    </SinglePostWrapper>
  );
};

export default SinglePost;

// {dateToDisplay(publishdate)}
