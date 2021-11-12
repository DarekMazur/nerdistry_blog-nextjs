import styled from 'styled-components';

export const HeptagonImage = styled.div`
  position: absolute;
  top: -67px;
  right: -118px;
  width: 236px;
  height: 235px;
  background-color: ${({ theme }) => theme.colors.brown};
  mask: url(heptagon.svg) no-repeat;
  mask-size: contain;
  opacity: 0.5;
  z-index: -1;
`;
