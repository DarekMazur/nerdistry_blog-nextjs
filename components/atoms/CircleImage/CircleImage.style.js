import styled from 'styled-components';

export const CircleImage = styled.div`
  position: absolute;
  top: -53px;
  left: -68px;
  width: 298px;
  height: 289px;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  mask: url(/circle.svg) no-repeat;
  mask-size: contain;
  opacity: 0.5;
  z-index: -1;
`;
