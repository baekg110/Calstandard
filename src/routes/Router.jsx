import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { LandingPage, PayPage } from '../pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pay" element={<PayPage />} />
      </Routes>
    </BrowserRouter>
  );
}
