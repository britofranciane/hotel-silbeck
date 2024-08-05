import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);

  if (isNaN(date.getTime())) {
    throw new Error('Data inválida');
  }

  return format(date, 'MMMM yyyy', { locale: ptBR });
};
