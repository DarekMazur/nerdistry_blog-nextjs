import React, { useContext, useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SinglePostWrapper, SinglePostContent } from './SinglePost.style';
import { ContentContext } from '../../../providers/ContentProvider';
import Pagination from '../../molecules/Pagination/Pagination';
import { useRouter } from 'next/router';
import { SRLWrapper } from 'simple-react-lightbox';

library.add(fas);

const SinglePost = ({ title, pagination }) => {
  const { getPost, getIsSingle } = useContext(ContentContext);
  const router = useRouter();
  const route = router.query.postSlug;
  const [singlePostItem, setSinglePostItem] = useState({});
  const { singlePost } = useContext(ContentContext);

  useEffect(() => {
    getPost(title);
    getIsSingle(true);
  }, [route]);

  useEffect(() => {
    setSinglePostItem(singlePost);
  }, [singlePost]);

  return (
    <SinglePostWrapper>
      <SRLWrapper
        options={{
          buttons: {
            iconPadding: '10px',
            showDownloadButton: false,
          },
        }}
      >
        {singlePostItem.length !== 0 ? (
          <SinglePostContent>
            <Markdown children={singlePostItem.Content} />
            <Pagination pagination={pagination} />
          </SinglePostContent>
        ) : null}
      </SRLWrapper>
    </SinglePostWrapper>
  );
};

export default SinglePost;
