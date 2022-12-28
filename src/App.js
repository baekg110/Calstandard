import React from 'react';
import tw from 'tailwind-styled-components';
import GlobalStyle, { AppContainer } from './GlobalStyle';
import Router from './routes/Router';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}
