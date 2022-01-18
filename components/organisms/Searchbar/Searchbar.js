import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';

import Input from '../../atoms/Input/Input';
import { SearchButton, SearchIconWrapper, SearchWrapper } from './SearchBar.style';
import { ErrorMessage } from '../../atoms/Input/Input.style';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  search: Yup.string().required('hey, tell me first what you are looking for!'),
});

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const errorMessage = (message) => {
    const error = message ? <ErrorMessage>{message}</ErrorMessage> : null;
    return error;
  };

  const getCategoriesList = async () => {
    const resCat = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/categories`);
    const getAllCategories = await resCat.json();

    setCategories(() => [...getAllCategories]);
  };

  useEffect(() => {
    getCategoriesList();
  }, []);

  return (
    <SearchWrapper isOpen={isOpen}>
      <div>
        <Formik
          initialValues={{
            search: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            axios
              .post('api/search', values)
              .then((res) => {
                setSubmitting(false);
                resetForm();
                handleClick();
              })
              .catch(console.log('Ooops...'));
          }}
        >
          {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <Input
                name="search"
                id="search"
                label="Search by tags"
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
        <Formik>
          <>
            {categories.length > 0
              ? categories.map((category) => (
                  <Input
                    key={category.id}
                    type="checkbox"
                    name="checkBox"
                    id={category.Name}
                    label={category.Name}
                    // onChange={handleChange}
                    // value={values.acceptTerms}
                  />
                ))
              : null}
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