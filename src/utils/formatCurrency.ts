import i18n from '../locales/i18n';

export const formatCurrency = (amount: number, currency: string): string => {
  return new Intl.NumberFormat(i18n.language, {
    style: 'currency',
    currency: currency
  }).format(amount);
};
