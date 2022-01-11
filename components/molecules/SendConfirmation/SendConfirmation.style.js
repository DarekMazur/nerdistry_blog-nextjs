import styled from 'styled-components';

export const StyledConfirmation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  border: black 0.1rem solid;
  background: white;
  z-index: 999;

  &::before {
    position: absolute;
    content: '';
    width: 100vw;
    height: 100vh;
    background: white;
    top: -50%;
    left: -50%;
    z-index: -1;
    opacity: 0.7;
  }

  svg:nth-of-type(1) {
    width: 3rem;
  }

  svg:nth-of-type(2) {
    width: 10rem;
  }
`;
