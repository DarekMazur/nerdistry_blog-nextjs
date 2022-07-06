import React, { useContext, useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { SinglePostWrapper, SinglePostContent } from './SinglePost.style';
import { ContentContext } from '../../../providers/ContentProvider';
import Pagination from '../../molecules/Pagination/Pagination';
import { useRouter } from 'next/router';
import { SRLWrapper } from 'simple-react-lightbox';
import Author from '../Author/Author';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'next-share';

const SinglePost = ({ title, pagination }) => {
  const { getPost, getIsSingle } = useContext(ContentContext);
  const router = useRouter();
  const route = router.query.postSlug;
  const [singlePostItem, setSinglePostItem] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const { singlePost } = useContext(ContentContext);
  const link = `${process.env.NEXT_PUBLIC_URL}${router.asPath}`;

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
      <Author author={singlePost.users} />
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
            <FacebookShareButton url={link} quote={title}>
              {console.log(process.env.NEXT_PUBLIC_URL)}
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={link} title={title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <RedditShareButton url={link} title={title}>
              <RedditIcon size={32} round />
            </RedditShareButton>
            <LinkedinShareButton url={link}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <FacebookMessengerShareButton url={link}>
              <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
            <EmailShareButton url={link} subject={title}>
              <EmailIcon size={32} round />
            </EmailShareButton>
            <Pagination pagination={pagination} />
          </SinglePostContent>
        ) : null}
      </SRLWrapper>
    </SinglePostWrapper>
  );
};

export default SinglePost;
