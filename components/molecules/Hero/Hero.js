import React, { useContext } from 'react';
import { HeroWrapper, StyledDots } from './Hero.style';
import SloganWrapper from '../SolganWrapper/SloganWrapper';
import { ContentContext } from '../../../providers/ContentProvider';
import SinglePostHero from '../SinglePostHero/SinglePostHero';

const Hero = () => {
  const { isSingle } = useContext(ContentContext);

  return (
    <>
      {isSingle ? (
        <SinglePostHero />
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
