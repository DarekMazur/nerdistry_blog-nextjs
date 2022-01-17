import styled from 'styled-components';

export const StyledPage = styled.div`
  background-color: ${({ theme }) => theme.colors.midWhite};
`;

export const ParagraphWithIcon = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6rem;
  color: inherit;
  text-decoration: none;

  svg {
    height: 4rem;
    margin-left: 1rem;
  }
`;

export const StyledProjectsWrapper = styled.div`
  width: 150vw;
  display: flex;
  padding: 5.3rem 0;

  @media (max-width: 767px) {
    flex-direction: column;
    width: 100vw;
  }
`;

export const ProjectSection = styled.div`
  position: relative;
  width: 50vw;
  min-height: 40rem;
  padding: 0 2.5rem 0 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ isDetails }) => (isDetails ? 'flex-start' : 'center')};
  border-left: ${({ theme, isCurtain }) => (isCurtain ? `1rem solid ${theme.colors.yellow}` : '0')};
  cursor: ${({ isCurtain }) => (isCurtain ? 'pointer' : 'inherit')};

  @media (max-width: 1080px) {
    width: ${({ isCurtain }) => (isCurtain ? `100vw` : '50vw')};
    align-items: ${({ isCurtain }) => (isCurtain ? `flex-end` : 'flex-start')};
    min-height: 50rem;

    &:nth-of-type(1) {
      display: none;
    }
  }

  @media (max-width: 767px) {
    display: ${({ isCurtain }) => (isCurtain ? `none` : 'static')};
    width: 100vw;
    min-height: 0;

    &:nth-of-type(1) {
      display: block;
    }
  }

  p {
    margin: 1.6rem 0;
  }

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

export const StyledButton = styled.button`
  display: block;
  color: black;
  text-decoration: none;
  background-color: white;
  width: 20rem;
  height: 5rem;
  border: 0.2rem solid black;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:visited,
  &:active {
    color: inherit;
  }

  span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: transform 0.1s ease-in-out;

    &:nth-child(1) {
      transform: translateY(${({ isMouseOver }) => (isMouseOver ? '-100%' : '0')});
    }

    &:nth-child(2) {
      transform: translateY(${({ isMouseOver }) => (isMouseOver ? '0' : '100%')});
    }
  }
`;

export const ButtonContent = styled.span`
  &::after {
    content: '${({ children }) => children}';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    text-align: center;
  }

  &::after {
    transform: translateY(300%);
    transition: transform 0.1s ease-in-out, opacity 0.1s ease-in-out;
  }

  &:hover::after {
    transform: translateY(0);
  }
`;

export const Pointer = styled.p`
  cursor: pointer;

  @media (max-width: 767px) {
    display: ${({ isProject }) => (isProject ? `none` : 'static')};
  }
`;

export const TechnologiesWrapper = styled.div`
  display: flex;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0.9rem;

    li {
      &::after {
        content: ',';
        padding-right: 0.5rem;
      }

      &:last-of-type::after {
        content: '';
        padding: 0;
      }
    }
  }
`;
