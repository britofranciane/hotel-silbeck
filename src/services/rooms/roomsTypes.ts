import { BaseEntity } from '../common/interfaces';

export interface Room extends BaseEntity {
  image_url: string;
  price: number;
  rating: number;
  id: number;
}

export interface RoomTranslation extends BaseEntity {
  room_id: number;
  language: string;
  description: string;
  comments: string;
}

export interface RoomWithTranslation extends Room {
  description: string;
  comments: string;
  title: string;
}
