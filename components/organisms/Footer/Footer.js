import React from 'react';
import { HeptagonImage } from '../../atoms/HeptagonImage/HeptagonImage.style';
import { SocialMenu } from '../../molecules/SocialMenu/SocialMenu';

import { Dashes, FooterContent, FooterLogoImage, StyledFooter } from './Footer.style';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <HeptagonImage bColor="blue" leftPos="-4.8" bottomPos="19.5" />
      <FooterLogoImage />
      <FooterContent>
        <Dashes />
        {currentYear} &copy; DarekMazur
        <SocialMenu />
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
