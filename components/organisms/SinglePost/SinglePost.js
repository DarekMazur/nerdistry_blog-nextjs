import React, { useContext, useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { SinglePostWrapper, SinglePostContent } from './SinglePost.style';
import { ContentContext } from '../../../providers/ContentProvider';

const SinglePost = ({ title }) => {
  const { getPost, getIsSingle } = useContext(ContentContext);
  const [singlePostItem, setSinglePostItem] = useState({});
  const { singlePost } = useContext(ContentContext);

  useEffect(() => {
    getPost(title);
    getIsSingle();
  }, []);

  useEffect(() => {
    setSinglePostItem(singlePost);
  }, [singlePost]);

  return (
    <SinglePostWrapper>
      {singlePostItem.length !== 0 ? (
        <SinglePostContent>
          <Markdown children={singlePostItem.Content} />
        </SinglePostContent>
      ) : null}
    </SinglePostWrapper>
  );
};

export default SinglePost;
