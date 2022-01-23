import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ContactSection } from '../../molecules/ContactSection/ContactSection.style';
import Input from '../../atoms/Input/Input';
import { ErrorMessage, SubmitButton } from '../../atoms/Input/Input.style';
import axios from 'axios';
import SendConfirmation from '../../molecules/SendConfirmation/SendConfirmation';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('inię jest wymagane')
    .min(2, 'imię jest za krótkie, podaj przynajmniej 2 znaki')
    .max(30, 'imię jest za długie, maksymalna długość to 30 znaków'),
  email: Yup.string().required('email jest wymagany').email('email jest niepoprawny'),
  message: Yup.string().required(`wiadomość nie może być pusta`),
  acceptTerms: Yup.bool().oneOf([true], 'zaakceptuj zasady prywatności'),
});

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    setIsOpen(!isOpen);
  };

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
    <>
      {isOpen ? <SendConfirmation handleSend={handleSend} /> : null}
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
          acceptTerms: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          axios
            .post('/api/contact', values)
            .then((res) => {
              setSubmitting(false);
              resetForm();
              document.querySelector('#acceptTerms').checked = false;
              handleSend();
            })
            .catch(console.log('Ooops...'));
        }}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <ContactSection as="form" onSubmit={handleSubmit}>
            <Input
              name="name"
              id="name"
              label="Imię"
              onChange={handleChange}
              value={values.name}
              errorMessage={errorMessage(errors.name)}
              isRequired
            />
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
              label="Wiadomość"
              onChange={handleChange}
              value={values.message}
              errorMessage={errorMessage(errors.message)}
              isRequired
            />
            <Input
              type="checkbox"
              name="acceptTerms"
              id="acceptTerms"
              label={privacyLink('zasady prywatności', 'Akceptuję')}
              onChange={handleChange}
              value={values.acceptTerms}
              errorMessage={errorMessage(errors.acceptTerms)}
              isRequired
            />

            <SubmitButton disabled={isSubmitting} type="submit">
              Wyślij
            </SubmitButton>
          </ContactSection>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
