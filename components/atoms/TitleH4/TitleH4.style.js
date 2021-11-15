import styled from 'styled-components';

export const TitleH4 = styled.h4`
  text-align: center;
  font-size: ${({ theme, isSmall }) => (isSmall ? theme.fontSize.lm : theme.fontSize.l)};
  color: ${({ theme }) => theme.colors.brown};
  margin: ${({ isSmall }) => (isSmall ? '-4rem 0 4rem' : '0')};
  font-family: ${({ theme }) => theme.fonts.secondaryHeaderFont};
`;
