import styled from 'styled-components';

export const SectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const StyledSectionTitle = styled.h3`
  color: ${({ theme, isProject }) => (isProject ? theme.colors.white : theme.colors.lightBlue)};
  font-family: ${({ theme }) => theme.fonts.secondaryHeaderFont};
  font-size: ${({ theme, isProject }) => (isProject ? theme.fontSize.xxl : theme.fontSize.xl)};
  -webkit-text-stroke: ${({ theme, isProject }) => (isProject ? `0.2rem ${theme.colors.blue}` : '0')};
  padding: 0;
  margin: 0;

  @media (max-width: 767px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const SectionTitleDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-family: ${({ theme }) => theme.fonts.headerFont};
  font-size: ${({ theme, isProject }) => (isProject ? theme.fontSize.l : theme.fontSize.lm)};
  padding: 0;
  margin: 0;

  @media (max-width: 767px) {
    font-size: ${({ theme }) => theme.fontSize.lm};
`;
