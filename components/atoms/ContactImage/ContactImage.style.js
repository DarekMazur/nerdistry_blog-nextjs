import styled from 'styled-components';

export const ContactImage = styled.div`
  width: 50%;
  min-height: 40rem;
  background: url('/contactImg.jpg') no-repeat center/cover;

  @media (max-width: 1280px) {
    display: none;
  }
`;
