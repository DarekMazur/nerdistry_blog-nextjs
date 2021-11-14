import React from 'react';
import { SocialMenu } from '../../molecules/SocialMenu/SocialMenu';

import { Dashes, FooterContent, FooterLogoImage, StyledFooter } from './Footer.style';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
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
