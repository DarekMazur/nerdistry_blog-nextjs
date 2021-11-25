import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Image from 'next/image';

import { NavigationList, NavigationListItem, NavigationWrapper, StyledNavigation, Branding, LogoWrapper, SiteTitle } from './Navigation.style';

import Logo from '../../../assets/images/svg/Logo_sqr.svg';

const Navigation = () => {
  const { route } = useRouter();
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
      <Link href="/" passHref>
        <Branding isScroll={scrollPosition > 200}>
          <LogoWrapper isScroll={scrollPosition > 200}>
            <Image src={Logo} alt="Nerdistry logo" layout="fill" objectFit="cover" />
          </LogoWrapper>
          <SiteTitle isScroll={scrollPosition > 200}>Nerdistry.</SiteTitle>
        </Branding>
      </Link>
      <StyledNavigation>
        <NavigationList isScroll={scrollPosition > 200}>
          <Link href="/" passHref>
            <NavigationListItem linkto="home" route={route} as="a">
              Home
            </NavigationListItem>
          </Link>
          <Link href="/blog" passHref>
            <NavigationListItem linkto="blog" route={route} as="a">
              Blog
            </NavigationListItem>
          </Link>
          <NavigationListItem>About</NavigationListItem>
          <Link href="/projects" passHref>
            <NavigationListItem linkto="projects" route={route} as="a">
              Projects
            </NavigationListItem>
          </Link>
          <NavigationListItem>Contact</NavigationListItem>
        </NavigationList>
      </StyledNavigation>
    </NavigationWrapper>
  );
};

export default Navigation;
