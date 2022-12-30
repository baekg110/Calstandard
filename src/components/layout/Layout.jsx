import React from 'react';
import styled from 'styled-components';

export const Container = styled.article`
  border: 1px solid red;
  width: min(780px, 100%);
  height: 100vh;
  display: flex;
  margin: auto;
  flex-direction: column;
`;

export const Section = styled.section`
  /* width: max(380px, 100%); */

  width: 100%;
  outline: 1px solid red;

  h2 {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const Header = styled.header`
  width: 100%;
  border: 1px solid blue;
`;
