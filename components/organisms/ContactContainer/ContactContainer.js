import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactLinksList, ContactLinksListItem } from './ContactContainer.style';

const ContactContainer = () => {
  return (
    <ContactLinksList>
      <ContactLinksListItem>
        <a href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER}`} target="_blank">
          <FontAwesomeIcon icon={['fab', 'twitter-square']} />
        </a>
      </ContactLinksListItem>
      <ContactLinksListItem>
        <a href={process.env.NEXT_PUBLIC_TWITTER} target="_blank">
          <FontAwesomeIcon icon={['fab', 'github-square']} />
        </a>
      </ContactLinksListItem>
      <ContactLinksListItem>
        <a href={process.env.NEXT_PUBLIC_INSTAGRAM} target="_blank">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </a>
      </ContactLinksListItem>
    </ContactLinksList>
  );
};

export default ContactContainer;
