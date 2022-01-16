import styled from 'styled-components';

export const PostListItemWrapper = styled.div`
  padding: 0 0 6.6rem;
  margin: 0;
`;

export const PostTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.secondaryHeaderFont};

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 700;
    margin: 0;
  }
`;

export const PostItemContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5.2rem;
  min-height: 32rem;
  border-radius: 1rem 0 0 1rem;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 1080px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

export const PostContent = styled.div`
  width: 50%;
  position: relative;

  @media (max-width: 1080px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    margin-bottom: 6rem;
  }
`;

export const PostTeaser = styled.div`
  margin: 0 5rem;

  @media (max-width: 767px) {
    /* margin: 0 5rem 7rem; */
  }
`;

export const PostImage = styled.div`
  background: ${({ imageUrl }) => `url(${imageUrl}) no-repeat center/cover`};
  min-height: 32rem;
  width: 45%;
  margin-left: 50px;
  border: ${({ theme }) => `1.6rem solid ${theme.colors.yellow}`};

  @media (max-width: 1080px) {
    width: 100%;
    margin-left: 0;
  }
`;
