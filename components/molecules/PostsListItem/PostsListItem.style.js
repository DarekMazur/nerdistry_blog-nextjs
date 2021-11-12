import styled from 'styled-components';

export const PostListItemWrapper = styled.div`
  padding: 0 0 10.6rem;
  margin: 0;
`;

export const PostTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.secondaryHeaderFont};

  h4 {
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.brown};
    margin: 0;
  }

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
  height: 35.8rem;
  border-radius: 1rem 0 0 1rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const PostContent = styled.div`
  width: 50%;
  position: relative;
`;

export const PostTeaser = styled.div`
  margin: 0 5rem;
`;

export const PostImage = styled.div`
  background: ${({ imageUrl }) => `url(${imageUrl}) no-repeat center/cover`};
  height: 100%;
  width: 45%;
  margin-left: 50px;
  border: ${({ theme }) => `1.6rem solid ${theme.colors.yellow}`};
`;

export const PostAuthor = styled.div`
  width: 18.3rem;
  height: 10.4rem;
  position: relative;
  margin: 4rem 5rem 0;
`;

export const Avatar = styled.div`
  background: ${({ imageUrl }) => `url(${imageUrl}) no-repeat center/cover`};
  width: 9.1rem;
  height: 9.1rem;
  border-radius: 50%;
  border: ${({ theme }) => `0.4rem solid ${theme.colors.yellow}`};
`;

export const AuthorName = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13rem;
  height: 2.6rem;
  font-family: ${({ theme }) => theme.fonts.headerFont};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.brown};
  margin: 0;
`;
