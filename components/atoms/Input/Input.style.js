import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: ${({ name }) => (name === 'message' ? '15rem' : '5rem')};
  margin: 1.5rem 0;
  padding: ${({ name }) => (name === 'message' ? '2rem 1rem' : '0 1rem')};
  color: ${({ theme }) => theme.colors.gray};
  border-color: ${({ theme, isError }) => (isError ? theme.colors.red : 'default')};
`;

export const Label = styled.label`
  position: absolute;
  top: 1.2rem;
  left: 0.2rem;
  transform-origin: 0 100%;
  transform: ${({ isBlur }) => (isBlur ? 'translateY(-1.5rem) scale(0.5)' : 'ranslateY(-1rem) scale(1)')};
  transition: transform 0.15s ease-in-out;
  opacity: 0.7;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -3.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.red};
`;
