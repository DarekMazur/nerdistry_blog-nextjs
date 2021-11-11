import React from 'react';

import Image from 'next/image';

import Logo from '../../../assets/images/svg/Logo_sqr.svg';
import HeroImage from '../../../assets/images/svg/hero_image.svg';
import DotsGrid from '../../../assets/images/svg/dot_grid.svg';

const Hero = () => {
  return (
    <>
      <Image src={DotsGrid} />
      <Image src={DotsGrid} />
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
    </>
  );
};

export default Hero;
