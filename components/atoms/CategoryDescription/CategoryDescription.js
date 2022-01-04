import styled from 'styled-components';

export const CategoryDescription = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.lm};
  color: ${({ theme }) => theme.colors.brown};
  margin: 0 4rem;
  font-family: ${({ theme }) => theme.fonts.secondaryHeaderFont};
`;
