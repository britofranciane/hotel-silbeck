import { supabase } from '../api/api';
import { RoomWithTranslation } from './roomsTypes';
import { SUPABASE_TABLES } from '../common/constants';

export const getRoomsByLanguage = async (
  language: string
): Promise<RoomWithTranslation[]> => {
  const { data, error } = await supabase
    .from(SUPABASE_TABLES.ROOMS)
    .select(
      `
      id,
      image_url,
      price,
      rating,
      room_translations!inner(language, description, comments, title)
    `
    )
    .eq('room_translations.language', language);

  if (error) {
    throw new Error(error.message);
  }

  return (
    data.map((room: any) => ({
      description: room.room_translations[0].description,
      comments: room.room_translations[0].comments,
      language: room.room_translations[0].language,
      id: room.id,
      image_url: room.image_url,
      price: room.price,
      rating: room.rating,
      title: room.room_translations[0].title,
      ...room
    })) || []
  );
};
