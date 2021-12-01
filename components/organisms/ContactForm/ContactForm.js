import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ContactSection } from '../../molecules/ContactSection/ContactSection.style';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('name is required').min(2, 'name is too short, min length is 2').max(30, 'name is too long, max length is 30'),
  email: Yup.string().required('email is required').email('email is not valid'),
  message: Yup.string().required(`message can't be empty`),
});

const ContactForm = () => {
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

  const errorMessage = (message) => {
    const error = message ? <p>{message}</p> : null;
    return error;
  };

  return (
    <ContactSection as="form" onSubmit={formik.handleSubmit}>
      <label for="name">Name</label>
      <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} required></input>
      {errorMessage(formik.errors.name)}
      <label for="email">E-mail</label>
      <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} required></input>
      {errorMessage(formik.errors.email)}
      <label for="message">Message</label>
      <textarea name="message" onChange={formik.handleChange} value={formik.values.message} required></textarea>
      {errorMessage(formik.errors.message)}
      <button type="submit">Send</button>
    </ContactSection>
  );
};

export default ContactForm;
