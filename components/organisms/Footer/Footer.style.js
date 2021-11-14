import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  background-color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.headerFont};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey};
  padding: 18.4rem 5.2rem 0;
`;

export const FooterLogoImage = styled.div`
  width: 20rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.white};
  mask: url(Logo.svg) no-repeat;
  mask-size: cover;
`;

export const FooterContent = styled.div`
  height: 10rem;
  width: calc(100% - 20rem);
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-top: dashed 0.5rem ${({ theme }) => theme.colors.grey};
  margin-left: 3rem;
`;
