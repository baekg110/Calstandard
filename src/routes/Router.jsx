import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { LandingPage, PayPage, ResultPage } from '../pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pay" element={<PayPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}
