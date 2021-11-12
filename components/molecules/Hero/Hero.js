import React from 'react';

import Image from 'next/image';

import Logo from '../../../assets/images/svg/Logo_sqr.svg';
import HeroImage from '../../../assets/images/svg/hero_image.svg';
import { Branding, HeroWrapper, LogoWrapper, SiteTitle, StyledDots } from './Hero.style';

const Hero = () => {
  return (
    <HeroWrapper>
      <StyledDots />
      <StyledDots />
      <Branding>
        <LogoWrapper>
          <Image src={Logo} alt="Nerdistry logo" width={100} height={100} />
        </LogoWrapper>
        <SiteTitle>Nerdistry.</SiteTitle>
      </Branding>
      <div>
        <div>
          <h2>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt.</h2>
        </div>
        <Image src={HeroImage} />
      </div>
    </HeroWrapper>
  );
};

export default Hero;
