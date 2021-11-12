import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ isScroll }) => (isScroll ? '50px' : '91px')};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 52px;
  box-shadow: 0 0.2rem 1rem ${({ theme }) => theme.colors.black};
  z-index: 10;
`;

export const StyledNavigation = styled.nav``;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  font-family: ${({ theme }) => theme.fonts.headerFont};
  font-size: ${({ theme, isScroll }) => (isScroll ? theme.fontSize.m : theme.fontSize.l)};
  font-weight: 700;
`;

export const NavigationListItem = styled.li`
  margin-left: 4rem;
`;

export const Branding = styled.div`
  position: absolute;
  top: ${({ isScroll }) => (isScroll ? '3px' : '25px')};
  left: 52px;
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: ${({ isScroll }) => (isScroll ? '40px' : '100px')};
  height: ${({ isScroll }) => (isScroll ? '40px' : '100px')};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SiteTitle = styled.h1`
  font-size: ${({ theme, isScroll }) => (isScroll ? theme.fontSize.m : theme.fontSize.l)};
  font-family: ${({ theme }) => theme.fonts.brandingFont};
  padding-left: 1rem;
`;
