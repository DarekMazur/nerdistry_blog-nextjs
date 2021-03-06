import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  background-color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.headerFont};
  font-size: ${({ theme }) => theme.fontSize.lm};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.yellow};
  padding: 18.4rem 5.2rem 0;

  @media (max-width: 1079px) {
    flex-direction: column;
    padding: 1rem 5.2rem 0;
    align-items: center;
  }
`;

export const FooterLogoImage = styled.div`
  width: 20rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.midWhite};
  mask: url(/Logo.svg) no-repeat;
  mask-size: cover;
  opacity: 0.4;
  cursor: pointer;

  @media (max-width: 1079px) {
    width: 10rem;
    height: 3.5rem;
  }
`;

export const FooterContent = styled.div`
  height: 10rem;
  width: calc(100% - 20rem);
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;
  opacity: 0.4;

  p {
    margin-left: -10rem;
  }

  @media (max-width: 1079px) {
    margin-left: 0;
    flex-direction: column;
    height: auto;

    p {
      margin-left: 0;
      text-align: center;
    }
  }
`;

export const Dashes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.8rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  mask: url(/line.svg) repeat-x;
  margin: 0;
  padding: 0;

  @media (max-width: 1079px) {
    display: none;
  }
`;
