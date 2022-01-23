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
      <SectionTitle title="Zostańmy w kontakcie!" description="Na co czekasz? Napiszże coś! :)" />
      <Description>
        Możesz napisać do mnie za pomocą socialmediów. Ale jeśli preferujesz bardziej tradycyjny sposób - to też nie problem. Wypełnij formularz
        kontaktowy i kliknij [Wyślij!]. Czytam wszytkie wiadomości i na wszystkie staram się odpowiedzieć ;)
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
