import styled from 'styled-components';

export const HeptagonImage = styled.div`
  position: absolute;
  top: ${({ bottomPos }) => (bottomPos ? null : '-67px')};
  bottom: ${({ bottomPos }) => (bottomPos ? `${bottomPos}rem` : null)};
  right: ${({ leftPos }) => (leftPos ? null : '-118px')};
  left: ${({ leftPos }) => (leftPos ? `${leftPos}rem` : null)};
  width: 236px;
  height: 235px;
  background-color: ${({ theme, bColor }) => (bColor ? theme.colors[bColor] : theme.colors.brown)};
  mask: url(/heptagon.svg) no-repeat;
  mask-size: contain;
  opacity: 0.5;
  z-index: -1;
`;
