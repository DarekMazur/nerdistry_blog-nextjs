import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ContactSection } from '../../molecules/ContactSection/ContactSection.style';
import Input from '../../atoms/Input/Input';
import { ErrorMessage, SubmitButton } from '../../atoms/Input/Input.style';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('name is required').min(2, 'name is too short, min length is 2').max(30, 'name is too long, max length is 30'),
  email: Yup.string().required('email is required').email('email is not valid'),
  message: Yup.string().required(`message can't be empty`),
});

const ContactForm = () => {
  const errorMessage = (message) => {
    const error = message ? <ErrorMessage>{message}</ErrorMessage> : null;
    return error;
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 4000);
      }}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
        <ContactSection as="form" onSubmit={handleSubmit}>
          <Input name="name" id="name" label="Name" onChange={handleChange} value={values.name} errorMessage={errorMessage(errors.name)} isRequired />
          <Input
            type="email"
            name="email"
            id="email"
            label="E-mail"
            onChange={handleChange}
            value={values.email}
            errorMessage={errorMessage(errors.email)}
            isRequired
          />
          <Input
            tag="textarea"
            name="message"
            id="message"
            label="Message"
            onChange={handleChange}
            value={values.message}
            errorMessage={errorMessage(errors.message)}
            isRequired
          />
          <SubmitButton disabled={isSubmitting} type="submit">
            Send
          </SubmitButton>
        </ContactSection>
      )}
    </Formik>
  );
};

export default ContactForm;
