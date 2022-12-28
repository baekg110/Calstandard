import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { LandingPage } from '../pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
