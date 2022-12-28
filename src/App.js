import React from 'react';
import tw from 'tailwind-styled-components';
import { AppContainer } from './GlobalStyle';
import Router from './routes/Router';

export default function App() {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
}
