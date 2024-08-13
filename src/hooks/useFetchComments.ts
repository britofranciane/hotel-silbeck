import { useState, useEffect } from 'react';
import { getComments } from '@services/comments/service';
import { Comment } from '@services/comments/types';
import { showNotification } from '@components/CustomNotification';

export const useFetchComments = (language: string) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const fetchedComments = await getComments(language);
        setComments(fetchedComments);
      } catch (error) {
        console.error('Erro ao buscar comentários:', error);
        showNotification('error', {
          message: 'Erro',
          description:
            'Não foi possível buscar os comentários. Tente novamente mais tarde.'
        });
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [language]);

  return { comments, loading };
};
