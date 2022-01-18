import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik } from 'formik';
import React, { useState } from 'react';

import Input from '../../atoms/Input/Input';
import { SearchButton, SearchIconWrapper, SearchWrapper } from './SearchBar.style';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SearchWrapper isOpen={isOpen}>
      <div>
        <Formik>
          <>
            <Input
              name="searchInput"
              id="searchInput"
              label="Search by tags"
              // onChange={handleChange}
              // value={values.name}
              // errorMessage={errorMessage(errors.name)}
              isRequired
            ></Input>
            <SearchButton type="submit">Search</SearchButton>
          </>
        </Formik>
        <Formik>
          <>
            <Input
              type="checkbox"
              name="checkBox"
              id="checkBox1"
              label="check"
              // onChange={handleChange}
              // value={values.acceptTerms}
              // errorMessage={errorMessage(errors.acceptTerms)}
            />
            <Input
              type="checkbox"
              name="checkBox"
              id="checkBox2"
              label="check"
              // onChange={handleChange}
              // value={values.acceptTerms}
              // errorMessage={errorMessage(errors.acceptTerms)}
            />
            <Input
              type="checkbox"
              name="checkBox"
              id="checkBox3"
              label="check"
              // onChange={handleChange}
              // value={values.acceptTerms}
              // errorMessage={errorMessage(errors.acceptTerms)}
            />
            <Input
              type="checkbox"
              name="checkBox"
              id="checkBox4"
              label="check"
              // onChange={handleChange}
              // value={values.acceptTerms}
              // errorMessage={errorMessage(errors.acceptTerms)}
            />
          </>
        </Formik>
      </div>
      <SearchIconWrapper onClick={handleClick}>
        <FontAwesomeIcon icon={['fas', 'search']} />
      </SearchIconWrapper>
    </SearchWrapper>
  );
};

export default SearchBar;
