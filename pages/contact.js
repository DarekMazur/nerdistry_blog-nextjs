import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('name is required').min(2, 'name is too short, min length is 2').max(10, 'name is too long, max length is 10'),
  email: Yup.string().required('email is required').email('email is not valid'),
  message: Yup.string().required(`message can't be empty`),
});

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label for="name">Name</label>
      <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} required></input>
      {formik.errors.name ? <p>{formik.errors.name}</p> : null}
      <label for="email">E-mail</label>
      <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} required></input>
      {formik.errors.email ? <p>{formik.errors.email}</p> : null}
      <label for="message">Message</label>
      <textarea name="message" onChange={formik.handleChange} value={formik.values.message} required></textarea>
      {formik.errors.message ? <p>{formik.errors.message}</p> : null}
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
