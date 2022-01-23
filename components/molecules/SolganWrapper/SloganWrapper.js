import React from 'react';
import Image from 'next/image';
import { Slogan } from '../../atoms/Slogan/Slogan.style';
import HeroImage from '../../../assets/images/svg/hero_image.svg';
import { HeroImageWrapper } from '../Hero/Hero.style';
import { Wrapper } from './SloganWrapper.style';

const SloganWrapper = () => {
  return (
    <Wrapper>
      <Slogan>Z notatnika młodego deva, czyli od juniora do zera. Czy tam na odwrót... ;)</Slogan>
      <HeroImageWrapper>
        <Image src={HeroImage} alt="" width={307} height={260} />
      </HeroImageWrapper>
    </Wrapper>
  );
};

export default SloganWrapper;
