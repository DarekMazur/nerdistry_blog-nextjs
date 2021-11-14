import React, { useContext } from 'react';
import { PostsContext } from '../../../pages';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';

import { HighlightNews, HighlightNewsTitleContainer, HighlightNewsTitle, HighlightNewsWrapper, HighlightWrapper } from './Highlight.style';

const Highlight = () => {
  const { posts } = useContext(PostsContext);
  // const highlightedPosts = posts.filter((post) => post.Hilghlight);
  // const lastHighlitedPosts = highlightedPosts.reverse().slice(0, 3);

  // if (lastHighlitedPosts.length !== 3) {
  //   const range = posts.length;

  //   const getRandomId = () => {
  //     return Math.ceil(Math.random() * range);
  //   };

  //   do {
  //     let newId = getRandomId();
  //     if (!lastHighlitedPosts.includes(posts.find((post) => post.id === newId))) {
  //       lastHighlitedPosts.push(posts.find((post) => post.id === newId));
  //     }
  //   } while (lastHighlitedPosts.length !== 3);
  // }

  return (
    <HighlightWrapper>
      <SectionTitle title="Lorem Ipsum" description="Dolor Sit Amet" />
      <HighlightNewsWrapper>
        {posts.map((lastHighlightedPost) => (
          <HighlightNews key={lastHighlightedPost.id} imageUrl={lastHighlightedPost.CoverImage.url}>
            <HighlightNewsTitleContainer>
              <HighlightNewsTitle>{lastHighlightedPost.MainCategory}</HighlightNewsTitle>
            </HighlightNewsTitleContainer>
          </HighlightNews>
        ))}
      </HighlightNewsWrapper>
    </HighlightWrapper>
  );
};

export default Highlight;
