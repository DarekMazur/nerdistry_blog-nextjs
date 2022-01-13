import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Image from 'next/image';

import {
  NavigationList,
  NavigationListItem,
  NavigationWrapper,
  StyledNavigation,
  Branding,
  LogoWrapper,
  SiteTitle,
  MenuButton,
} from './Navigation.style';

import Logo from '../../../assets/images/svg/Logo_sqr.svg';

const Navigation = () => {
  const { route } = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
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

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

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
      <StyledNavigation isOpen={isOpen}>
        <NavigationList isScroll={scrollPosition > 200}>
          <Link href="/" passHref>
            <NavigationListItem linkto="home" route={route} as="a" onClick={handleClick}>
              Home
            </NavigationListItem>
          </Link>
          <Link href="/blog" passHref>
            <NavigationListItem linkto="blog" route={route} as="a" onClick={handleClick}>
              Blog
            </NavigationListItem>
          </Link>
          <Link href="/projects" passHref>
            <NavigationListItem linkto="projects" route={route} as="a" onClick={handleClick}>
              Projects
            </NavigationListItem>
          </Link>
          <Link href="/contact" passHref>
            <NavigationListItem linkto="projects" route={route} as="a" onClick={handleClick}>
              Contact
            </NavigationListItem>
          </Link>
        </NavigationList>
      </StyledNavigation>
      <MenuButton icon={['fas', `${isOpen ? 'times' : 'bars'}`]} onClick={handleClick} />
    </NavigationWrapper>
  );
};

export default Navigation;
