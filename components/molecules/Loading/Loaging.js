import React from 'react';
import { Loader, LoaderElement, LoaderWrapper } from './Loading.style';

const Loading = () => {
  return (
    <LoaderWrapper>
      <Loader>
        <LoaderElement />
        <LoaderElement />
        <LoaderElement />
        <LoaderElement />
      </Loader>
    </LoaderWrapper>
  );
};

export default Loading;
