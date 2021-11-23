import styled from 'styled-components';

export const StyledPage = styled.div`
  background-color: ${({ theme }) => theme.colors.midWhite};
`;

export const StyledProjectsWrapper = styled.div`
  width: 150vw;
  display: flex;
  padding: 5.3rem 0;
`;

export const ProjectSection = styled.div`
  position: relative;
  width: 50vw;
  height: 40rem;
  margin: 1.6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: ${({ theme, background }) => (background ? `1rem solid ${theme.colors.yellow}` : '0')};

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
`;
