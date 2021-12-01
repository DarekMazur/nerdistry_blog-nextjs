import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactSection } from '../../molecules/ContactSection/ContactSection.style';
import { ContactLinksList, ContactLinksListItem } from './ContactContainer.style';

const ContactContainer = () => {
  return (
    <ContactSection>
      <ContactLinksList>
        <ContactLinksListItem>
          twitter{' '}
          <a href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER}`} target="_blank">
            <FontAwesomeIcon icon={['fab', 'twitter-square']} />
          </a>
        </ContactLinksListItem>
        <ContactLinksListItem>
          github{' '}
          <a href={process.env.NEXT_PUBLIC_TWITTER} target="_blank">
            <FontAwesomeIcon icon={['fab', 'github-square']} />
          </a>
        </ContactLinksListItem>
        <ContactLinksListItem>
          instagram{' '}
          <a href={process.env.NEXT_PUBLIC_INSTAGRAM} target="_blank">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
        </ContactLinksListItem>
      </ContactLinksList>
    </ContactSection>
  );
};

export default ContactContainer;
