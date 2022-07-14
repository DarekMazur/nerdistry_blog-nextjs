import { useRouter } from 'next/router';
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
import { StyledSharing } from './SharingPanel.style';

const SharingPanel = ({ title }) => {
  const router = useRouter();
  const link = `${process.env.NEXT_PUBLIC_URL}${router.asPath}`;

  return (
    <StyledSharing>
      <h4>Podziel się:</h4>
      <FacebookShareButton url={link} quote={title}>
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
      <FacebookMessengerShareButton url={link} appId={''}>
        <FacebookMessengerIcon size={32} round />
      </FacebookMessengerShareButton>
      <EmailShareButton url={link} subject={title}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </StyledSharing>
  );
};

export default SharingPanel;
