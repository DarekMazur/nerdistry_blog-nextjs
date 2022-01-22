import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, useFormikContext } from 'formik';
import * as Yup from 'yup';
import React, { useContext, useEffect, useState } from 'react';

import Input from '../../atoms/Input/Input';
import { SearchButton, SearchIconWrapper, SearchWrapper } from './SearchBar.style';
import { ErrorMessage } from '../../atoms/Input/Input.style';
import { useRouter } from 'next/dist/client/router';
// import { ContentContext } from '../../../providers/ContentProvider';

const validationSchema = Yup.object().shape({
  search: Yup.string().required('hey, tell me first what you are looking for!'),
});

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [categories, setCategories] = useState([]);
  // const [initialValues, setInitialValues] = useState({});
  // const [values, setValues] = useState({});

  // const { getCategoriesPosts } = useContext(ContentContext);

  const router = useRouter();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const errorMessage = (message) => {
    const error = message ? <ErrorMessage>{message}</ErrorMessage> : null;
    return error;
  };

  // const getCategoriesList = async () => {
  //   const resCat = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/categories`);
  //   const getAllCategories = await resCat.json();

  //   setCategories(() => [...getAllCategories]);
  // };

  // const FormikOnChange = () => {
  //   const { values } = useFormikContext();
  //   setValues(values);
  //   console.log(values);

  //   return null;
  // };

  // useEffect(() => {
  //   for (const [key, value] of Object.entries(values)) {
  //     if (value === true) {
  //       categories.push(key);
  //     }
  //   }
  //   getCategoriesPosts(categories.join('&_categories.Name='));
  // }, [values]);

  // useEffect(() => {
  //   getCategoriesList();
  // }, []);

  // useEffect(() => {
  //   categories.forEach((category) => {
  //     const key = category.Name;
  //     setInitialValues((prevState) => ({ ...prevState, [key]: true }));
  //   });
  // }, [categories]);

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
      {/* <Formik initialValues={initialValues} enableReinitialize={true}>
        {({ values, handleChange }) => (
          <form>
            <p>Filter</p>
            <FormikOnChange />
            {categories.length > 0
              ? categories.map((category) => (
                  <Input
                    key={category.id}
                    type="checkbox"
                    name={category.Name}
                    id={category.Name}
                    label={category.Name}
                    isChecked={values[category.Name]}
                    onChange={handleChange}
                    value={values[category.Name]}
                  />
                ))
              : null}
          </form>
        )}
      </Formik> */}
      <SearchIconWrapper onClick={handleClick}>
        <FontAwesomeIcon icon={['fas', 'search']} />
      </SearchIconWrapper>
    </SearchWrapper>
  );
};

export default SearchBar;
