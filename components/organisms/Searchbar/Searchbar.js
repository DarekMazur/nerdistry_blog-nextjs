import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik } from 'formik';
import React from 'react';
import Input from '../../atoms/Input/Input';
import { SubmitButton } from '../../atoms/Input/Input.style';

const SearchBar = () => {
  return (
    <div>
      {' '}
      {/* wrapper */}
      <div>
        <Formik>
          <>
            <Input
              name="searchInput"
              id="searchInput"
              label="Search by tag"
              // onChange={handleChange}
              // value={values.name}
              // errorMessage={errorMessage(errors.name)}
              isRequired
            ></Input>
            <SubmitButton type="submit">Search</SubmitButton>
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
      <div>
        {' '}
        {/* icon wrapper */}
        <FontAwesomeIcon icon={['fas', 'search']} />
      </div>
    </div>
  );
};

export default SearchBar;
