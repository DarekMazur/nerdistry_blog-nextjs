import React from 'react';
import empty from '../../../assets/images/svg/empty.svg';

import Image from 'next/image';
import { EmptyList } from './PostsListEmpty.style';
import { TitleH4 } from '../TitleH4/TitleH4.style';

const PostsListEmpty = () => {
  return (
    <EmptyList>
      <TitleH4>Coś tutaj pusto... za pusto...</TitleH4>
      <Image src={empty} alt="" height={300} width={400} />
    </EmptyList>
  );
};

export default PostsListEmpty;
