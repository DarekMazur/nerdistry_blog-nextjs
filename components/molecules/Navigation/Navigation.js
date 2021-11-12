import React, { useState, useEffect } from 'react';

import Image from 'next/image';

import { NavigationList, NavigationListItem, NavigationWrapper, StyledNavigation, Branding, LogoWrapper, SiteTitle } from './Navigation.style';

import Logo from '../../../assets/images/svg/Logo_sqr.svg';

const Navigation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavigationWrapper isScroll={scrollPosition > 200}>
      {console.log(scrollPosition)}
      <Branding isScroll={scrollPosition > 200}>
        <LogoWrapper isScroll={scrollPosition > 200}>
          <Image src={Logo} alt="Nerdistry logo" layout="fill" objectFit="cover" />
        </LogoWrapper>
        <SiteTitle isScroll={scrollPosition > 200}>Nerdistry.</SiteTitle>
      </Branding>
      <StyledNavigation>
        <NavigationList isScroll={scrollPosition > 200}>
          <NavigationListItem>Home</NavigationListItem>
          <NavigationListItem>Blog</NavigationListItem>
          <NavigationListItem>About</NavigationListItem>
          <NavigationListItem>Projects</NavigationListItem>
          <NavigationListItem>Contact</NavigationListItem>
        </NavigationList>
      </StyledNavigation>
    </NavigationWrapper>
  );
};

export default Navigation;
