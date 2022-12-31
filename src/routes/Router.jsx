import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { LandingPage, PayPage, ResultPage } from '../pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<LandingPage />} />
        <Route path={process.env.PUBLIC_URL + '/pay'} element={<PayPage />} />
        <Route path={process.env.PUBLIC_URL + '/result'} element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}
