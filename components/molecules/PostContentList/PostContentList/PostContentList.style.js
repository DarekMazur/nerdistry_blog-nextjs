import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  font-family: ${({ theme }) => theme.fonts.headerFont};
  font-size: ${({ isTagList, theme }) => (isTagList ? theme.fontSize.s : theme.fontSize.m)};
  font-weight: 700;
`;
