import React from 'react';

import Image from 'next/image';

import Logo from '../../../assets/images/svg/Logo_sqr.svg';
import HeroImage from '../../../assets/images/svg/hero_image.svg';
import { Branding, HeroImageWrapper, HeroWrapper, LogoWrapper, SiteTitle, Slogan, SloganWrapper, StyledDots } from './Hero.style';

const Hero = () => {
  return (
    <HeroWrapper>
      <StyledDots />
      <StyledDots />
      {/* <Branding>
        <LogoWrapper>
          <Image src={Logo} alt="Nerdistry logo" width={100} height={100} />
        </LogoWrapper>
        <SiteTitle>Nerdistry.</SiteTitle>
      </Branding> */}
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
