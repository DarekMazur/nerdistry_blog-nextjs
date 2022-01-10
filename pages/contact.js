import React from 'react';
import { ContactImage } from '../components/atoms/ContactImage/ContactImage.style';
import { Description } from '../components/atoms/Description/Description.style';

import SectionTitle from '../components/molecules/SectionTitle/SectionTitle';
import ContactContainer from '../components/organisms/ContactContainer/ContactContainer';
import ContactForm from '../components/organisms/ContactForm/ContactForm';
import { ContactWrapper } from '../components/organisms/ContactWrapper/ContactWrapper.style';

const Contact = () => {
  return (
    <>
      <SectionTitle title="Stay in touch!" description="Hey, what you waiting for? Send me a message!" />
      <Description>
        You can contact me using my social media profiles. And if prefere more traditional way - no problem! Fill contact form and press [Send]! I'll
        read all messages and I'll do my best to answer ;)
      </Description>
      <ContactContainer />
      <ContactWrapper>
        <ContactForm />
        <ContactImage />
      </ContactWrapper>
    </>
  );
};

export default Contact;
