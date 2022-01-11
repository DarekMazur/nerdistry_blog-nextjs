import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { ContactSection } from '../../molecules/ContactSection/ContactSection.style';
import Input from '../../atoms/Input/Input';
import { ErrorMessage, InputWrapper, Label, SubmitButton } from '../../atoms/Input/Input.style';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('name is required').min(2, 'name is too short, min length is 2').max(30, 'name is too long, max length is 30'),
  email: Yup.string().required('email is required').email('email is not valid'),
  message: Yup.string().required(`message can't be empty`),
  acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
});

const ContactForm = () => {
  const errorMessage = (message) => {
    const error = message ? <ErrorMessage>{message}</ErrorMessage> : null;
    return error;
  };

  const privacyLink = (linked, prefix, sufix) => {
    return (
      <>
        {prefix ? `${prefix} ` : 'null'}
        <a href="/privacy" target="_blank">
          {linked}
        </a>
        {sufix ? ` ${sufix}` : ''}
      </>
    );
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
        acceptTerms: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        axios.post('/api/contact', values).then((res) => {
          setSubmitting(false);
          resetForm();
        });
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
          <Input
            type="checkbox"
            name="acceptTerms"
            id="acceptTerms"
            label={privacyLink('Terms & Conditions', 'Accept')}
            onChange={handleChange}
            value={values.message}
            errorMessage={errorMessage(errors.acceptTerms)}
            isRequired
          />
          {/* <InputWrapper>
            <Field type="checkbox" name="acceptTerms" required="true" />
            <Label htmlFor="acceptTerms">Accept Terms & Conditions</Label>
            {errorMessage(errors.acceptTerms)}
          </InputWrapper> */}

          <SubmitButton disabled={isSubmitting} type="submit">
            Send
          </SubmitButton>
        </ContactSection>
      )}
    </Formik>
  );
};

export default ContactForm;
