import React from 'react';

import Image from 'next/image';

import Logo from '../../../assets/images/svg/Logo_sqr.svg';
import HeroImage from '../../../assets/images/svg/hero_image.svg';
import DotsGrid from '../../../assets/images/svg/dot_grid.svg';
import { HeroWrapper, StyledDots } from './Hero.style';

const Hero = () => {
  return (
    <HeroWrapper>
      <StyledDots />
      <StyledDots />
      {/* <Image src={DotsGrid} alt="" width={485} height={382} />
      </StyledDots> */}
      {/* <Image src={DotsGrid} /> */}
      <div>
        <div>
          <Image src={Logo} />
          <h1>Nerdistry.</h1>
        </div>
      </div>
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
