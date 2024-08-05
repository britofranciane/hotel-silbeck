import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Payment } from '../pages/index';
import Header from '@components/Header';
import Footer from '@components/Footer';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/payment'} element={<Payment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
