import { useFormik } from 'formik';
import React from 'react';

const validate = (values) => {
  const errors = {};

  const pattern =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  if (!values.name.length) {
    errors.name = 'name is required';
  } else if (values.name.length < 2) {
    errors.name = 'name is too short, min length is 2';
  } else if (values.name.length > 10) {
    errors.name = 'name is too long, max length is 10';
  }

  if (!values.email.length) {
    errors.email = 'email is required';
  } else if (!pattern.test(values.email)) {
    errors.email = 'email is not valid';
  }

  if (!values.message) {
    errors.message = `message can't be empty`;
  }

  return errors;
};

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label for="name">Name</label>
      <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name}></input>
      {formik.errors.name ? <p>{formik.errors.name}</p> : null}
      <label for="email">E-mail</label>
      <input type="text" name="email" onChange={formik.handleChange} value={formik.values.email}></input>
      {formik.errors.email ? <p>{formik.errors.email}</p> : null}
      <label for="message">Message</label>
      <textarea name="message" onChange={formik.handleChange} value={formik.values.message}></textarea>
      {formik.errors.message ? <p>{formik.errors.message}</p> : null}
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
