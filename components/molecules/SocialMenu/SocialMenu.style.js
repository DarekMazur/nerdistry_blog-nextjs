import styled from 'styled-components';

export const SocialMediaList = styled.ul`
  display: flex;
  position: absolute;
  color: ${({ theme }) => theme.colors.midWhite};
  list-style: none;
  right: 0;
  bottom: 0;

  @media (max-width: 1079px) {
    position: static;
    padding: 0;
  }
`;

export const SocialMediaListItem = styled.li`
  width: 3rem;
  height: 3rem;
  margin-left: 4rem;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;

  &:nth-of-type(1) {
    margin-left: 0;
  }

  &:hover {
    opacity: 1;
  }

  a:visited,
  a:active {
    color: ${({ theme }) => theme.colors.midWhite};
  }
`;
