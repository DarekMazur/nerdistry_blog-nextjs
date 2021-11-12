import styled from 'styled-components';

export const HighlightWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.yellow};
  padding: 39px 52px 0;
`;

export const HighlightNewsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HighlightNews = styled.div`
  position: relative;
  width: 30%;
  height: 25.9rem;
  border-radius: 1rem 1rem 0 0;
  box-shadow: ${({ theme }) => `0 5px 6px -6px ${theme.colors.black}`};
  background: ${({ imageUrl }) => `url(${imageUrl}) no-repeat center/cover`};
`;

export const HighlightNewsTitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HighlightNewsTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.headerFont};
  font-size: ${({ theme }) => theme.fontSize.l};
`;
