import styled from 'styled-components';
import { SubmitButton } from '../../atoms/Input/Input.style';

export const SearchWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;
  height: 100vh;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  background-color: ${({ theme }) => theme.colors.midWhite};
  z-index: 15;
  padding: 2rem;
  transition: transform 100ms ease-in-out;
`;

export const SearchIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  position: absolute;
  top: 50%;
  right: -3.5rem;
  width: 3.5rem;
  heigth: 3rem;
  background-color: ${({ theme }) => theme.colors.midWhite};
  border-radius: 0 0.5rem 0.5rem 0;
  transition: transform 50ms ease-in-out;

  &:hover {
    transform: translateX(0.3rem) scale(1.3);
  }
`;

export const SearchButton = styled(SubmitButton)`
  top: 6rem;
  left: 2rem;
`;
