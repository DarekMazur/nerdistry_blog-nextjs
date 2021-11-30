import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SectionTitle from '../components/molecules/SectionTitle/SectionTitle';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('name is required').min(2, 'name is too short, min length is 2').max(30, 'name is too long, max length is 30'),
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

  const errorMessage = (message) => {
    const error = message ? <p>{message}</p> : null;
    return error;
  };

  return (
    <>
      <SectionTitle title="Stay in touch!" description="Hey, what you waiting for? Send me a message!" />
      <form onSubmit={formik.handleSubmit}>
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
      </form>
      <div>
        <p>Lorem ipsum dolor sit Amet</p>
        <ul>
          <li>
            twitter{' '}
            <a href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER}`} target="_blank">
              <FontAwesomeIcon icon={['fab', 'twitter-square']} />
            </a>
          </li>
          <li>
            github{' '}
            <a href={process.env.NEXT_PUBLIC_TWITTER} target="_blank">
              <FontAwesomeIcon icon={['fab', 'github-square']} />
            </a>
          </li>
          <li>
            instagram{' '}
            <a href={process.env.NEXT_PUBLIC_INSTAGRAM} target="_blank">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
