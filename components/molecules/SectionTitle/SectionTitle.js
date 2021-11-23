import React from 'react';

import { SectionTitleDescription, SectionTitleWrapper, StyledSectionTitle } from './SectionTitle.style';

const SectionTitle = ({ title, description, isProject }) => {
  return (
    <SectionTitleWrapper>
      <SectionTitleDescription isProject={isProject}>{description}</SectionTitleDescription>
      <StyledSectionTitle isProject={isProject}>{title}</StyledSectionTitle>
    </SectionTitleWrapper>
  );
};

export default SectionTitle;
