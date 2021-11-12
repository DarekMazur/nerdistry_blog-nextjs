import styled from 'styled-components';

export const HeroWrapper = styled.div`
  margin: 52px 32px;
`;

export const StyledDots = styled.div`
  position: absolute;
  top: -80px;
  right: -92px;
  width: 485px;
  height: 382px;
  background-color: ${({ theme }) => theme.colors.yellow};
  mask: url(dot_grid.svg);
  mask-size: cover;
  opacity: 0.3;
  z-index: -1;

  &:nth-child(2) {
    top: 277px;
    left: 0;
  }
`;

export const Branding = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  width: 100px;
  height: 100px;
`;

export const SiteTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: ${({ theme }) => theme.fonts.brandingFont};
  padding-left: 1rem;
`;

export const SloganWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 106px;
`;

export const Slogan = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: ${({ theme }) => theme.fonts.headerFont};
  width: 50%;
`;

export const HeroImageWrapper = styled.div`
  position: relative;
  width: 307px;
  height: 260px;
`;