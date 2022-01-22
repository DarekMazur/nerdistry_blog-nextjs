import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';

import Input from '../../atoms/Input/Input';
import { SearchButton, SearchIconWrapper, SearchWrapper } from './SearchBar.style';
import { ErrorMessage } from '../../atoms/Input/Input.style';
import { useRouter } from 'next/dist/client/router';

const validationSchema = Yup.object().shape({
  search: Yup.string().required('hey, tell me first what you are looking for!'),
});

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const errorMessage = (message) => {
    const error = message ? <ErrorMessage>{message}</ErrorMessage> : null;
    return error;
  };

  return (
    <SearchWrapper isOpen={isOpen}>
      <Formik
        initialValues={{
          search: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          resetForm();
          handleClick();
          router.push({
            pathname: '/search',
            query: { results: values.search },
          });
        }}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Input
              name="search"
              id="search"
              label="Keywords"
              onChange={handleChange}
              value={values.search}
              errorMessage={errorMessage(errors.search)}
              isRequired
            />
            <SearchButton disabled={isSubmitting} type="submit">
              Search
            </SearchButton>
          </form>
        )}
      </Formik>
      <SearchIconWrapper onClick={handleClick}>
        <FontAwesomeIcon icon={['fas', 'search']} />
      </SearchIconWrapper>
    </SearchWrapper>
  );
};

export default SearchBar;
