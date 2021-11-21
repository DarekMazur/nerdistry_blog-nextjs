import React, { useContext } from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import { dateToDisplay } from '../../../utils/helpers';
import { HeroWrapper, StyledDots } from './Hero.style';
import SloganWrapper from '../SolganWrapper/SloganWrapper';
import { ContentContext } from '../../../providers/ContentProvider';
import { SinglePostCategoryLink, SinglePostHero } from '../../organisms/SinglePost/SinglePost.style';
import SectionTitle from '../SectionTitle/SectionTitle';

const Hero = () => {
  const { singlePost, isSingle } = useContext(ContentContext);

  return (
    <>
      {isSingle ? (
        <SinglePostHero background={singlePost.CoverImage?.url}>
          <SectionTitle
            title={singlePost.Title}
            description={
              singlePost.categories ? (
                <p>
                  {singlePost.categories.map((category) => (
                    <Link href={`/category/${slugify(category.Name, { remove: /[*+~.()'"!:@]/g, lower: true })}`}>
                      <SinglePostCategoryLink>{category.Name}</SinglePostCategoryLink>
                    </Link>
                  ))}
                </p>
              ) : null
            }
          />
          <p>{`${dateToDisplay(singlePost.published_at)} by ${singlePost.User?.username}`}</p>
        </SinglePostHero>
      ) : (
        <HeroWrapper>
          <StyledDots />
          <StyledDots />
          <SloganWrapper />
        </HeroWrapper>
      )}
    </>
  );
};

export default Hero;
