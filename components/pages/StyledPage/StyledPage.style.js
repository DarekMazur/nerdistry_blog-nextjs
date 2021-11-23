import styled from 'styled-components';

export const StyledPage = styled.div`
  background-color: ${({ theme }) => theme.colors.midWhite};
`;

export const ProjectsWrapper = styled.div`
  width: 150vw;
  display: flex;
  padding: 5.3rem 0;
`;

export const ProjectSection = styled.div`
  width: 50vw;
  height: 40rem;
  margin: 1.6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ background }) =>
    background
      ? 'url("https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80") no-repeat center/cover'
      : 'transparent'};
  border-left: ${({ theme, background }) => (background ? `1rem solid ${theme.colors.yellow}` : '0')};
`;
