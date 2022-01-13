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
  mask: url(/dot_grid.svg);
  mask-size: cover;
  opacity: 0.3;
  z-index: -1;

  &:nth-child(2) {
    top: 277px;
    left: 0;
  }

  @media (max-width: 1280px) {
    width: 350px;
    height: 160px;
    top: -5px;
    right: -50px;

    &:nth-child(2) {
      top: 200px;
      left: -30px;
    }
  }
`;

export const HeroImageWrapper = styled.div`
  width: 307px;
  height: 260px;

  @media (max-width: 1280px) {
    width: 200px;
    height: 180px;
  }
`;
