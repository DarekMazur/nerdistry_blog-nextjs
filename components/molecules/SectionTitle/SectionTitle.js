import React from 'react';

import { SectionTitleDescription, SectionTitleWrapper, StyledSectionTitle } from './SectionTitle.style';

const SectionTitle = ({ title, description }) => {
  return (
    <SectionTitleWrapper>
      <SectionTitleDescription>{description}</SectionTitleDescription>
      <StyledSectionTitle>{title}</StyledSectionTitle>
    </SectionTitleWrapper>
  );
};

export default SectionTitle;
