import { supabase } from '../api/api';
import { Comment } from './types';
import { SUPABASE_TABLES } from '../common/constants';

export const getComments = async (language: string): Promise<Comment[]> => {
  const { data, error } = await supabase
    .from<Comment>(SUPABASE_TABLES.COMMENTS)
    .select('*')
    .eq('language', language);

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};

export const addComment = async (comment: Comment): Promise<void> => {
  const { error } = await supabase
    .from<Comment>(SUPABASE_TABLES.COMMENTS)
    .insert([comment]);

  if (error) {
    throw new Error(error.message);
  }
};
