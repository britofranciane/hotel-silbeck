import React, { ReactNode } from 'react';
import { LocaleProvider } from './LocaleContext';
import { CartProvider } from './CartContext';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <LocaleProvider>
      <CartProvider>{children}</CartProvider>
    </LocaleProvider>
  );
};

export default Providers;
