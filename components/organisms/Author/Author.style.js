import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const AuthorWrapper = styled.div`
  width: 30vw;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  border-left: solid 1rem ${({ theme }) => theme.colors.yellow};
  z-index: 10;
  transition: transform 0.15s ease-in-out;

  @media (max-width: 1080px) {
    width: 50vw;
  }

  @media (max-width: 767px) {
    width: 100vw;
  }
`;

export const CloseButton = styled(FontAwesomeIcon)`
  position: absolute;
  width: 2rem;
  transition: transform 0.15s ease-in-out;
  top: 2rem;
  left: 2rem;

  &:hover {
    transform: rotate(180deg);
  }

  @media (max-width: 1080px) {
    width: 4rem;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  padding: 1rem 5rem;
`;
