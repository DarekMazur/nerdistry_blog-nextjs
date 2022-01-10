import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, Label, StyledInput } from './Input.style';

const Input = ({ tag: Tag, type, name, id, label, isRequired, onChange, value, errorMessage }) => {
  const [isBlur, setIsBlur] = useState(false);

  const handleOnFocus = () => {
    setIsBlur(true);
  };

  const handleOnBlur = (e) => {
    if (e.target.value === '') {
      setIsBlur(false);
    }
  };

  return (
    <InputWrapper>
      <Label htmlFor={name} isBlur={type === 'checkbox' ? false : isBlur} type={type}>
        {label}
      </Label>
      <StyledInput
        as={Tag}
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        required={isRequired}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        isError={errorMessage !== null}
      />
      {errorMessage}
    </InputWrapper>
  );
};

Input.PropTypes = {
  tag: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.isRequired,
  isRequired: PropTypes.bool,
};

Input.defaultProps = {
  tag: 'input',
  type: 'text',
  isRequired: false,
};

export default Input;
