import React from 'react';

import SectionTitle from '../components/molecules/SectionTitle/SectionTitle';
import ContactContainer from '../components/organisms/ContactContainer/ContactContainer';
import ContactForm from '../components/organisms/ContactForm/ContactForm';
import { ContactWrapper } from '../components/organisms/ContactWrapper/ContactWrapper.style';

const Contact = () => {
  return (
    <>
      <SectionTitle title="Stay in touch!" description="Hey, what you waiting for? Send me a message!" />
      <p>
        You can contact me using my social media profiles. And if prefere more traditional way - no problem! Fill contact form and press [Send]! I'll
        read all messages and I'll do my best to answer ;)
      </p>
      <ContactWrapper>
        <ContactContainer />
        <ContactForm />
      </ContactWrapper>
    </>
  );
};

export default Contact;
