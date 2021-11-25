import React, { useContext, useState } from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import { dateToDisplay } from '../../../utils/helpers';
import { ContentContext } from '../../../providers/ContentProvider';
import SectionTitle from '../SectionTitle/SectionTitle';
import { AuthorName, SinglePostCategoryLink, SinglePostHeroWrapper } from './SinglePostHero.style';

const SinglePostHero = () => {
  const { singlePost, handleClick } = useContext(ContentContext);

  return (
    <SinglePostHeroWrapper background={singlePost.CoverImage?.url}>
      <SectionTitle
        title={singlePost.Title}
        description={
          singlePost.categories ? (
            <p>
              {singlePost.categories.map((category) => (
                <Link key={category.id} href={`/category/${slugify(category.Name, { remove: /[*+~.()'"!:@]/g, lower: true })}`}>
                  <SinglePostCategoryLink>{category.Name}</SinglePostCategoryLink>
                </Link>
              ))}
            </p>
          ) : null
        }
      />
      <p>
        {dateToDisplay(singlePost?.published_at)} by{' '}
        <AuthorName onClick={handleClick}>
          <strong>{singlePost.User?.username}</strong>
        </AuthorName>
      </p>
    </SinglePostHeroWrapper>
  );
};

export default SinglePostHero;
