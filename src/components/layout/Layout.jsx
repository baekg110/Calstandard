import React from 'react';
import styled from 'styled-components';

export const Container = styled.article`
  width: min(780px, 100%);
  height: 100vh;
  display: flex;
  margin: auto;
  flex-direction: column;
`;

export const Section = styled.section`
  /* width: max(380px, 100%); */
  width: 100%;
`;

export const Header = styled.header`
  margin: 60px 0 32px;
  width: 100%;
  text-align: center;
  h2 {
    font-size: 24px;
    font-weight: 700;
  }
`;
