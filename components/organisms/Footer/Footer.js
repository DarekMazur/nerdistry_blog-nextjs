import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <footer>{currentYear} &copy; DarekMazur</footer>;
};

export default Footer;
