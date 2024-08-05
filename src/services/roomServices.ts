import { supabase } from './supabaseClient';

export interface RoomData {
  id: number;
  image_url: string;
  price: number;
}

export interface RoomTranslation {
  id: number;
  room_id: number;
  language: string;
  title: string;
  description: string;
  comments: number;
}

// roomServices.ts

export const fetchRooms = async () => {
  try {
    // Requisita todos os dados da tabela 'rooms'
    const { data: rooms, error: roomsError } = await supabase
      .from('rooms')
      .select('*');

    console.log('Fetched rooms:', rooms); // Adiciona logs para depuração

    if (roomsError) {
      console.error('Error fetching rooms:', roomsError);
      return { rooms: [], error: roomsError };
    }

    return { rooms, error: null };
  } catch (err) {
    console.error('Unexpected error:', err);
    return { rooms: [], error: err };
  }
};
