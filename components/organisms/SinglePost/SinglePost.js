import React, { useContext, useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { SinglePostWrapper, SinglePostContent } from './SinglePost.style';
import { ContentContext } from '../../../providers/ContentProvider';
import Pagination from '../../molecules/Pagination/Pagination';
import { useRouter } from 'next/router';
import { SRLWrapper } from 'simple-react-lightbox';

const SinglePost = ({ title, pagination }) => {
  const { getPost, getIsSingle } = useContext(ContentContext);
  const router = useRouter();
  const route = router.query.postSlug;
  const [singlePostItem, setSinglePostItem] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const { singlePost } = useContext(ContentContext);

  useEffect(() => {
    getPost(title);
    getIsSingle(true);
  }, [route]);

  useEffect(() => {
    setSinglePostItem(singlePost);
  }, [singlePost]);

  const handleCopy = (e) => {
    const content = e.target;
    if (e.target.tagName === 'CODE' && !isCopied) {
      navigator.clipboard.writeText(content.innerHTML);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  };

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
          <SinglePostContent onClick={handleCopy} isCopied={isCopied}>
            <Markdown children={singlePostItem.Content} />
            <Pagination pagination={pagination} />
          </SinglePostContent>
        ) : null}
      </SRLWrapper>
    </SinglePostWrapper>
  );
};

export default SinglePost;
