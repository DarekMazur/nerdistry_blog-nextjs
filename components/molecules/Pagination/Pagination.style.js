import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: ${({ isFirst }) => (isFirst ? 'flex-end' : 'space-between')};
  align-items: center;

  svg {
    height: 3rem;
  }
`;

export const PaginationElement = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.2s ease-in-out;
  transform-origin: 0 50%;

  &:last-of-type {
    transform-origin: 100% 50%;
  }

  span {
    margin: 0 2rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
