import React from 'react';

import SectionTitle from '../components/molecules/SectionTitle/SectionTitle';
import ContactForm from '../components/organisms/ContactForm/ContactForm';
import ContactWrapper from '../components/organisms/ContactWrapper/ContactWrapper';

const Contact = () => {
  return (
    <>
      <SectionTitle title="Stay in touch!" description="Hey, what you waiting for? Send me a message!" />
      <ContactWrapper />
      <ContactForm />
    </>
  );
};

export default Contact;
