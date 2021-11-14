import styled from 'styled-components';

export const Slogan = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: ${({ theme }) => theme.fonts.headerFont};
  width: 50%;
`;
