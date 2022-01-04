import styled from 'styled-components';

export const Description = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.lm};
  margin: 0 4rem;
  font-family: ${({ theme }) => theme.fonts.secondaryHeaderFont};
`;
