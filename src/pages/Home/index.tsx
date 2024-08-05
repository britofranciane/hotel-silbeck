import React, { useEffect, useState } from 'react';
import {
  RoomCard,
  EvaluationCard,
  Title,
  CustomCarousel
} from '@components/index';
import './styles.scss';
import { getComments } from '@services/comments/service';
import { getRoomsByLanguage } from '@services/rooms/roomsService';
import { Room, RoomWithTranslation } from '@services/rooms/roomsTypes';
import { formatDate } from '@utils/formatDate';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@context/LocaleContext.tsx';
import HomeSkeleton from './skeleton.tsx';
import { useCart } from '@context/CartContext.tsx';
import { showNotification } from '@components/CustomNotification/index.ts';
import { Comment } from '@services/comments/types.ts';

const Home: React.FC = () => {
  const { language } = useLocale();
  const { t } = useTranslation();
  const [comments, setComments] = useState<Comment[]>([]);
  const [rooms, setRooms] = useState<RoomWithTranslation[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedComments = await getComments(language);
        const fetchedRooms = await getRoomsByLanguage(language);
        setComments(fetchedComments);
        setRooms(fetchedRooms);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language]);

  const tPath = (path: string) => t(`pages.home.${path}`);

  const addItemToCart = (room: Room) => {
    showNotification('success', {
      message: tPath('notification.message'),
      description: tPath('notification.description')
    });

    addItem({
      title: room.title,
      daily: '2',
      stay: '08/12/2023 - 10/12/2023',
      numberGuests: '2',
      quantity: 3,
      price: room.price,
      id: room.id
    });
  };

  return (
    <div className="home-container">
      {loading ? (
        <HomeSkeleton />
      ) : (
        <>
          <section className="home-container__section">
            <div className="home-container__section__container">
              <Title text={tPath('sectionRooms.title')} />
              <p className="home-container__description">
                {tPath('sectionRooms.description')}
              </p>
            </div>
            <div className="home-container__section__rooms-cards">
              {rooms &&
                rooms.map(room => (
                  <RoomCard
                    key={room.id}
                    title={room.title}
                    comments={room.comments}
                    rating={room.rating}
                    description={room.description}
                    price={room.price}
                    imageUrl={room.image_url}
                    onClick={() => addItemToCart(room)}
                  />
                ))}
            </div>
          </section>
          <section>
            <Title text={tPath('sectionEvaluation.title')} />
            {comments && (
              <CustomCarousel
                items={comments.map(comment => (
                  <EvaluationCard
                    name={comment.name}
                    description={comment.comment}
                    date={formatDate(comment.date)}
                    rating={comment.rating}
                  />
                ))}
              />
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
