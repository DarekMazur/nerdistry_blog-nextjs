import React from 'react';
import { SocialMenu } from '../../molecules/SocialMenu/SocialMenu';

import { FooterContent, FooterLogoImage, SocialMediaMenu, StyledFooter } from './Footer.style';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <FooterLogoImage />
      <FooterContent>
        {currentYear} &copy; DarekMazur
        <SocialMenu />
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
