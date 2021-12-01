import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactWrapper = () => {
  return (
    <div>
      <p>Lorem ipsum dolor sit Amet</p>
      <ul>
        <li>
          twitter{' '}
          <a href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER}`} target="_blank">
            <FontAwesomeIcon icon={['fab', 'twitter-square']} />
          </a>
        </li>
        <li>
          github{' '}
          <a href={process.env.NEXT_PUBLIC_TWITTER} target="_blank">
            <FontAwesomeIcon icon={['fab', 'github-square']} />
          </a>
        </li>
        <li>
          instagram{' '}
          <a href={process.env.NEXT_PUBLIC_INSTAGRAM} target="_blank">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactWrapper;
