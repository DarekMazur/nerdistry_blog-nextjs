import React from 'react';
import { HeroWrapper, StyledDots } from './Hero.style';
import SloganWrapper from '../SolganWrapper/SloganWrapper';

const Hero = () => {
  return (
    <HeroWrapper>
      <StyledDots />
      <StyledDots />
      <SloganWrapper />
    </HeroWrapper>
  );
};

export default Hero;
