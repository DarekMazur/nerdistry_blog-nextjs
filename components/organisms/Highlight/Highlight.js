import React from 'react';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';

import { HighlightWrapper } from './Highlight.style';

const Highlight = () => {
  return (
    <HighlightWrapper>
      <SectionTitle title="Lorem Ipsum" description="Dolor Sit Amet" />
      <div>
        <div>Highlite 1</div>
        <div>Highlite 2</div>
        <div>Highlite 3</div>
      </div>
    </HighlightWrapper>
  );
};

export default Highlight;
