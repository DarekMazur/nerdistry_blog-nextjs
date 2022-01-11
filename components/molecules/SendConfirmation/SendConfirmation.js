import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CloseButton } from '../../organisms/Author/Author.style';
import { StyledConfirmation } from './SendConfirmation.style';

const SendConfirmation = ({ handleSend }) => {
  return (
    <StyledConfirmation>
      <CloseButton icon={['fas', 'times']} onClick={handleSend} />
      <p>Thanks for message! I'll do my best to answer :)</p>
      <FontAwesomeIcon icon={['far', 'paper-plane']} />
    </StyledConfirmation>
  );
};

export default SendConfirmation;
