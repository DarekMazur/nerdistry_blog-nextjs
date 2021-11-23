import styled from 'styled-components';

export const SinglePostWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.midWhite};
  margin-bottom: 6rem;
`;

export const SinglePostContent = styled.div`
  padding: 3.2rem 0;
  margin: 0 auto 3.2rem;
  max-width: 102.4rem;

  pre {
    background: ${({ theme }) => theme.colors.deepPurple};
    border: 1px solid #ddd;
    border-left: ${({ theme }) => `0.5rem solid ${theme.colors.yellow}`};
    color: ${({ theme }) => theme.colors.green};
    page-break-inside: avoid;
    font-family: ${({ theme }) => theme.fonts.codeFont};
    font-size: 1.5rem;
    line-height: 1.6;
    margin-bottom: 1.6rem;
    max-width: 100%;
    overflow: auto;
    padding: 1rem 1.5rem 2rem;
    display: block;

    &::before {
      content: '// code';
      color: ${({ theme }) => theme.colors.grey};
      display: block;
      padding-bottom: 1rem;
      opacity: 0.7;
    }

    code {
      display: inline-block;
      white-space: normal;
      max-width: 100%;
      word-break: break-word;
      word-wrap: break-word;
    }
  }

  img {
    max-width: 60rem;
    cursor: pointer;
  }
`;
