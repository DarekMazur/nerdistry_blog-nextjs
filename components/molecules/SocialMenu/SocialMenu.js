import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialMediaListItem, SocialMediaList } from './SocialMenu.style';
export const SocialMenu = () => {
  return (
    <SocialMediaList>
      <SocialMediaListItem>
        <a href={process.env.NEXT_PUBLIC_FACEBOOK} target="_blank">
          <FontAwesomeIcon icon={['fab', 'facebook-square']} />
        </a>
      </SocialMediaListItem>
      <SocialMediaListItem>
        <a href={process.env.NEXT_PUBLIC_TWITTER} target="_blank">
          <FontAwesomeIcon icon={['fab', 'twitter-square']} />
        </a>
      </SocialMediaListItem>
      <SocialMediaListItem>
        <a href={process.env.NEXT_PUBLIC_INSTAGRAM} target="_blank">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </a>
      </SocialMediaListItem>
    </SocialMediaList>
  );
};
