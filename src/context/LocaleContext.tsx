import React, { createContext, useState, useContext, ReactNode } from 'react';

interface LocaleContextType {
  language: string;
  currency: string;
  setLanguage: (language: string) => void;
  setCurrency: (currency: string) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [language, setLanguage] = useState<string>('en');
  const [currency, setCurrency] = useState<string>('USD');

  const updateLanguage = (language: string) => {
    setLanguage(language);
    switch (language) {
      case 'pt':
        setCurrency('BRL');
        break;
      case 'es':
        setCurrency('EUR');
        break;
      case 'en':
      default:
        setCurrency('USD');
        break;
    }
  };

  return (
    <LocaleContext.Provider
      value={{ language, currency, setLanguage: updateLanguage, setCurrency }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
