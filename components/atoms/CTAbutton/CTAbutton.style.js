import styled from 'styled-components';

export const CTAbutton = styled.button`
  position: absolute;
  bottom: 1.9rem;
  right: 5rem;
  width: 21.6rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.headerFont};
  color: ${({ theme }) => theme.colors.brown};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.yellow};
  border: ${({ theme }) => `0.3rem solid ${theme.colors.brown}`};
`;
