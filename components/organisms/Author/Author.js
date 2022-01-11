import React, { useContext } from 'react';
import Markdown from 'react-markdown';
import { ContentContext } from '../../../providers/ContentProvider';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
import { AuthorWrapper, Avatar, CloseButton } from './Author.style';

const Author = ({ author }) => {
  const { isOpen, handleClick } = useContext(ContentContext);

  return (
    <AuthorWrapper isOpen={isOpen}>
      <CloseButton icon={['fas', 'times']} onClick={handleClick} />
      <Avatar src={author?.Avatar.url} alt="" />
      <SectionTitle title={author?.username} />
      <Markdown children={author?.Bio} />
      <p>{author?.email}</p>
    </AuthorWrapper>
  );
};

export default Author;
