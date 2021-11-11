import React from 'react';

import Image from 'next/image';

import Logo from '../../../assets/images/svg/Logo_sqr.svg';
import HeroImage from '../../../assets/images/svg/hero_image.svg';

const Hero = () => {
  return (
    <>
      <div>
        <div>
          <Image src={Logo} />
          <h1>Nerdistry.</h1>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
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
