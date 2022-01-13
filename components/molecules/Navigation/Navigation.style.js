import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 91px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 5.2rem;
  box-shadow: 0 0.2rem 1rem ${({ theme }) => theme.colors.black};
  z-index: 10;
  transform: translateY(${({ isScroll }) => (isScroll ? '-41px' : '0')});
  transition: transform 0.2s ease-in-out;

  @media (max-width: 1080px) {
    height: 5rem;
    transform: translateY(0);
    padding: 0;
  }
`;

export const StyledNavigation = styled.nav`
  @media (max-width: 767px) {
    transform: translateX(120%);
    top: 0;
    height: 100vh;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: ${({ isScroll }) => (isScroll ? 'flex-end' : 'center')};
  list-style: none;
  font-family: ${({ theme }) => theme.fonts.headerFont};
  font-size: ${({ theme, isScroll }) => (isScroll ? theme.fontSize.m : theme.fontSize.l)};
  font-weight: 700;
  padding: ${({ isScroll }) => (isScroll ? '0 0 12px' : '0')};
  margin: 0;
  transition: font-size 0.2s ease-in-out;

  @media (max-width: 1080px) {
    align-items: flex-end;
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 0 0 12px;
  }
`;

export const NavigationListItem = styled.li`
  position: relative;
  margin-left: 4rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.1s ease-in-out;

  &:active,
  &:visited {
    color: inherit;
  }

  &:hover {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.blue};
    display: ${({ href, route }) => (href === route && route !== undefined ? 'block' : 'none')};
  }
`;

export const Branding = styled.div`
  position: absolute;
  top: 0;
  left: 52px;
  display: flex;
  align-items: center;
  transform: translateY(${({ isScroll }) => (isScroll ? '15px' : '25px')});
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  @media (max-width: 1080px) {
    transform: translateY(-25px);
    left: 0;
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  transform: scale(${({ isScroll }) => (isScroll ? '0.4' : '1')});
  transition: transform 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 1080px) {
    transform: scale(0.4);
  }
`;

export const SiteTitle = styled.h1`
  font-size: ${({ theme, isScroll }) => (isScroll ? theme.fontSize.m : theme.fontSize.l)};
  font-family: ${({ theme }) => theme.fonts.brandingFont};
  transform: translateX(${({ isScroll }) => (isScroll ? '-35px' : '0')});
  padding-left: 1rem;
  transition: font-size 0.2s ease-in-out, transform 0.2s ease-in-out;

  @media (max-width: 1080px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    transform: translateX(-35px);
  }
`;

export const MenuButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0.8rem;
  right: 3rem;
  display: none;
  height: 3rem;

  @media (max-width: 767px) {
    display: inline;
  }
`;
