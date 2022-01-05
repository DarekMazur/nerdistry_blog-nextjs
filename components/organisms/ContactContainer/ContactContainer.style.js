import styled from 'styled-components';

export const ContactLinksList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  width: 100%;
`;

export const ContactLinksListItem = styled.li`
  height: 7rem;
  display: flex;

  a {
    &:visited {
      color: inherit;
    }
  }

  svg {
    padding-left: 2rem;
    height: 5rem;
  }
`;
