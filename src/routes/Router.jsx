import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { LandingPage, PayPage, ResultPage } from '../pages';
import HomePage from '../pages/HomePage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pay" element={<PayPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}
