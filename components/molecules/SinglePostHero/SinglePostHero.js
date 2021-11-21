import React, { useContext } from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import { dateToDisplay } from '../../../utils/helpers';
import { ContentContext } from '../../../providers/ContentProvider';
import SectionTitle from '../SectionTitle/SectionTitle';
import { SinglePostCategoryLink, SinglePostHeroWrapper } from './SinglePostHero.style';

const SinglePostHero = () => {
  const { singlePost } = useContext(ContentContext);

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
      <p>{`${dateToDisplay(singlePost.published_at)} by ${singlePost.User?.username}`}</p>
    </SinglePostHeroWrapper>
  );
};

export default SinglePostHero;
