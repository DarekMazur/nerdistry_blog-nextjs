import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';

import Input from '../../atoms/Input/Input';
import { SearchButton, SearchIconWrapper, SearchWrapper } from './SearchBar.style';

const validationSchema = Yup.object().shape({
  search: Yup.string().required('hey, tell me first what you are lookin for!'),
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
        >
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
            {categories.length > 0
              ? categories.map((category) => (
                  <Input
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
