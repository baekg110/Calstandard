import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  background-color: var(--main-color);
  border: none;
  border-radius: 30px;
  cursor: pointer;
`;

export default function Button({ children }) {
  return <ButtonContainer>{children}</ButtonContainer>;
}
