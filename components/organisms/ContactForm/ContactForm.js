import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ContactSection } from '../../molecules/ContactSection/ContactSection.style';
import Input from '../../atoms/Input/Input';
import { ErrorMessage } from '../../atoms/Input/Input.style';

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
    const error = message ? <ErrorMessage>{message}</ErrorMessage> : null;
    return error;
  };

  return (
    <ContactSection as="form" onSubmit={formik.handleSubmit}>
      <Input
        name="name"
        id="name"
        label="Name"
        onChange={formik.handleChange}
        value={formik.values.name}
        errorMessage={errorMessage(formik.errors.name)}
        isRequired
      />
      <Input
        type="email"
        name="email"
        id="email"
        label="E-mail"
        onChange={formik.handleChange}
        value={formik.values.email}
        errorMessage={errorMessage(formik.errors.email)}
        isRequired
      />
      <Input
        tag="textarea"
        name="message"
        id="message"
        label="Message"
        onChange={formik.handleChange}
        value={formik.values.message}
        errorMessage={errorMessage(formik.errors.message)}
        isRequired
      />
      <button type="submit">Send</button>
    </ContactSection>
  );
};

export default ContactForm;
