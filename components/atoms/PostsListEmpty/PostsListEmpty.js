import React from 'react';
import empty from '../../../assets/images/svg/empty.svg';

import Image from 'next/image';
import { EmptyList } from './PostsListEmpty.style';
import { TitleH4 } from '../TitleH4/TitleH4.style';

const PostsListEmpty = () => {
  return (
    <EmptyList>
      <TitleH4>It looks there is no posts right now. Come back later!</TitleH4>
      <Image src={empty} alt="" height={300} width={400} />
    </EmptyList>
  );
};

export default PostsListEmpty;
