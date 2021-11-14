import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { SocialMediaListItem, SocialMediaList } from './SocialMenu.style';

library.add(fab);

export const SocialMenu = () => {
  return (
    <SocialMediaList>
      <SocialMediaListItem>
        <FontAwesomeIcon icon={['fab', 'facebook-square']} />
      </SocialMediaListItem>
      <SocialMediaListItem>
        <FontAwesomeIcon icon={['fab', 'twitter-square']} />
      </SocialMediaListItem>
      <SocialMediaListItem>
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </SocialMediaListItem>
    </SocialMediaList>
  );
};
