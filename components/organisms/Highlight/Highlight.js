import React from 'react';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';

import { HighlightNews, HighlightNewsTitleContainer, HighlightNewsTitle, HighlightNewsWrapper, HighlightWrapper } from './Highlight.style';

const Highlight = () => {
  return (
    <HighlightWrapper>
      <SectionTitle title="Lorem Ipsum" description="Dolor Sit Amet" />
      <HighlightNewsWrapper>
        <HighlightNews imageUrl="https://images.unsplash.com/photo-1485856407642-7f9ba0268b51">
          <HighlightNewsTitleContainer>
            <HighlightNewsTitle>Highlight 1</HighlightNewsTitle>
          </HighlightNewsTitleContainer>
        </HighlightNews>
        <HighlightNews imageUrl="https://images.unsplash.com/photo-1603468620905-8de7d86b781e">
          <HighlightNewsTitleContainer>
            <HighlightNewsTitle>Highlight 2</HighlightNewsTitle>
          </HighlightNewsTitleContainer>
        </HighlightNews>
        <HighlightNews imageUrl="https://images.unsplash.com/photo-1526649661456-89c7ed4d00b8">
          <HighlightNewsTitleContainer>
            <HighlightNewsTitle>Highlight 3</HighlightNewsTitle>
          </HighlightNewsTitleContainer>
        </HighlightNews>
      </HighlightNewsWrapper>
    </HighlightWrapper>
  );
};

export default Highlight;
