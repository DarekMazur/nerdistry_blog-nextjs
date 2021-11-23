import styled from 'styled-components';

export const SectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledSectionTitle = styled.h3`
  color: ${({ theme, isProject }) => (isProject ? theme.colors.white : theme.colors.lightBlue)};
  font-family: ${({ theme }) => theme.fonts.secondaryHeaderFont};
  font-size: ${({ theme, isProject }) => (isProject ? theme.fontSize.xxl : theme.fontSize.xl)};
  -webkit-text-stroke: ${({ theme, isProject }) => (isProject ? `0.2rem ${theme.colors.blue}` : '0')};
  padding: 0;
  margin: 0;
`;

export const SectionTitleDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-family: ${({ theme }) => theme.fonts.headerFont};
  font-size: ${({ theme, isProject }) => (isProject ? theme.fontSize.l : theme.fontSize.lm)};
  padding: 0;
  margin: 0;
`;
