import React from 'react';
import { IntlProvider } from 'react-intl';
import { messages as enMessages } from './locales/en/intl';
import { messages as esMessages } from './locales/es/intl';

interface IntlProps {
  children: React.ReactNode;
}

const messages = {
  en: enMessages,
  es: esMessages
};

const IntlWrapper: React.FC<IntlProps> = ({ children }) => {
  const [locale, setLocale] = React.useState('en');

  const changeLocale = (locale: string) => {
    setLocale(locale);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
      <button onClick={() => changeLocale('en')}>USD</button>
      <button onClick={() => changeLocale('es')}>EUR</button>
    </IntlProvider>
  );
};

export default IntlWrapper;
