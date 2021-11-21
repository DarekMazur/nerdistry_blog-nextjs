import styled from 'styled-components';

export const SinglePostHeroWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `${theme.colors.yellow} 1rem solid`};
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ background }) => `url(${background}) no-repeat center/cover`};
    opacity: 0.3;
    z-index: -1;
  }
`;

export const SinglePostCategoryLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;

  &::after {
    content: ', ';
  }

  &:last-of-type::after {
    content: '';
  }
`;
