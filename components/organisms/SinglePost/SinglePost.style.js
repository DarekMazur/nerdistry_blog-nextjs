import styled from 'styled-components';

export const SinglePostWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.midWhite};
  margin-bottom: 6rem;
`;

export const SinglePostContent = styled.div`
  padding: 3.2rem 0;
  margin: 0 auto 3.2rem;
  max-width: 102.4rem;

  blockquote {
    font-style: italic;
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 1rem 3rem;
    border-left: ${({ theme }) => `${theme.colors.blue} 0.4rem solid`};
  }

  code {
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
    padding: 1rem 1.5rem 7rem;
    display: block;
    position: relative;

    &::before {
      content: '// code';
      color: ${({ theme }) => theme.colors.grey};
      display: block;
      padding-bottom: 1rem;
      opacity: 0.7;
    }

    &::after {
      content: '${({ isCopied }) => (isCopied ? 'copied!' : '')}';
      height: 5rem;
      width: 5rem;
      background-color: ${({ theme, isCopied }) => (isCopied ? 'transparent' : theme.colors.grey)};
      mask: ${({ isCopied }) => (isCopied ? 'none' : 'url(/copy-regular.svg) no-repeat')};
      color: ${({ theme }) => theme.colors.grey};
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 1rem;
      opacity: ${({ isCopied }) => (isCopied ? '0.7' : '0.3')};
      position: absolute;
      bottom: ${({ isCopied }) => (isCopied ? '0.2rem' : '1rem')};
      right: ${({ isCopied }) => (isCopied ? '3rem' : '1rem')};
    }

    /* code {
      width: 100%;
      height: 100%;
      display: inline-block;
      white-space: normal;
      max-width: 100%;
      word-break: break-word;
      word-wrap: break-word;
    } */
  }

  img {
    width: 90vw;
    max-width: 60rem;
    cursor: pointer;
  }
`;
