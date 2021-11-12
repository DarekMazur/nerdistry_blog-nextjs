import styled from 'styled-components';

export const SectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.lightBlue};
`;

export const StyledSectionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.secondaryHeaderFont};
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 0;
  margin: 0;
`;

export const SectionTitleDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.headerFont};
  font-size: ${({ theme }) => theme.fontSize.lm};
  padding: 0;
  margin: 0;
`;
