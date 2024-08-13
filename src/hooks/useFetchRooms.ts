import { useState, useEffect } from 'react';
import { getRoomsByLanguage } from '@services/rooms/roomsService';
import { RoomWithTranslation } from '@services/rooms/roomsTypes';
import { formatCurrency } from '@utils/formatCurrency';
import { showNotification } from '@components/CustomNotification';

export const useFetchRooms = (language: string, currency: string) => {
  const [rooms, setRooms] = useState<RoomWithTranslation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      setLoading(true);
      try {
        const fetchedRooms = await getRoomsByLanguage(language);
        const formattedRooms = await Promise.all(
          fetchedRooms.map(async room => ({
            ...room,
            formattedPrice: await formatCurrency(room.price, currency)
          }))
        );
        setRooms(formattedRooms);
      } catch (error) {
        console.error('Erro ao buscar quartos:', error);
        showNotification('error', {
          message: 'Erro',
          description:
            'Não foi possível buscar os quartos. Tente novamente mais tarde.'
        });
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, [language, currency]);

  return { rooms, loading };
};
