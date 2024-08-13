import axios from 'axios';

const API_KEY = '8cfddba2cf169138ac50445a';
const API_URL = 'https://api.exchangerate-api.com/v4/latest/';

export const fetchConversionRate = async (
  fromCurrency: string,
  toCurrency: string
): Promise<number> => {
  try {
    const response = await axios.get(
      `${API_URL}${fromCurrency}?apiKey=${API_KEY}`
    );
    const rates = response.data.rates;
    if (!rates[toCurrency]) {
      throw new Error(`Taxa de conversão para ${toCurrency} não encontrada.`);
    }
    return rates[toCurrency];
  } catch (error) {
    console.error('Erro ao buscar taxa de conversão:', error);
    throw error;
  }
};
