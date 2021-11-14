import React from 'react';

import Image from 'next/image';

import HeroImage from '../../../assets/images/svg/hero_image.svg';
import { HeroImageWrapper, HeroWrapper, Slogan, SloganWrapper, StyledDots } from './Hero.style';

const Hero = () => {
  return (
    <HeroWrapper>
      <StyledDots />
      <StyledDots />
      <SloganWrapper>
        <Slogan>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt.</Slogan>
        <HeroImageWrapper>
          <Image src={HeroImage} alt="" width={307} heigth={260} />
        </HeroImageWrapper>
      </SloganWrapper>
    </HeroWrapper>
  );
};

export default Hero;
