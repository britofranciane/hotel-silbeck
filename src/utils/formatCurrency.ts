import { fetchConversionRate } from '@services/currencyService';
import i18n from '../locales/i18n';

export const convertCurrency = async (
  amount: number,
  toCurrency: string
): Promise<number> => {
  try {
    const rate = await fetchConversionRate('BRL', toCurrency);
    return amount * rate;
  } catch (error) {
    console.error('Erro ao converter moeda:', error);
    return amount;
  }
};

export const formatCurrency = async (
  amount: number,
  toCurrency: string
): Promise<string> => {
  const convertedAmount = await convertCurrency(amount, toCurrency);
  return new Intl.NumberFormat(i18n.language, {
    style: 'currency',
    currency: toCurrency
  }).format(convertedAmount);
};
