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
  transition: color 0.15s 0.1s ease-in-out;
  z-index: 2;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }

  &::before {
    content: '';
    width: calc(100% + 0.1rem);
    height: 100%;
    position: absolute;
    top: 0;
    left: -0.1rem;
    background-color: ${({ theme }) => theme.colors.brown};
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: transform 0.4s ease-in-out;
    z-index: -1;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;
