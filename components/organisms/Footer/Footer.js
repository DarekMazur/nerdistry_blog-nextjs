import React from 'react';
import { StyledFooter } from './Footer.style';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <StyledFooter>{currentYear} &copy; DarekMazur</StyledFooter>;
};

export default Footer;
