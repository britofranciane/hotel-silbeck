import React, { useCallback } from 'react';
import {
  RoomCard,
  EvaluationCard,
  Title,
  CustomCarousel,
  showNotification
} from '@components/index';
import './styles.scss';
import { useFetchComments } from '@hooks/useFetchComments';
import { useFetchRooms } from '@hooks/useFetchRooms';
import { useLocale } from '@context/LocaleContext';
import HomeSkeleton from './skeleton';
import { useCart } from '@context/CartContext';
import { formatDate } from '@utils/formatDate';
import BottomContent from '@components/Header/BottomContent';
import { useTranslation } from 'react-i18next';
import { Room } from '@services/rooms/roomsTypes';

const Home: React.FC = () => {
  const { language, currency } = useLocale();
  const { comments, loading: commentsLoading } = useFetchComments(language);
  const { rooms, loading: roomsLoading } = useFetchRooms(language, currency);
  const { addItem } = useCart();
  const { t } = useTranslation();

  const loading = commentsLoading || roomsLoading;
  const tPath = (path: string) => t(`pages.home.${path}`);

  const addItemToCart = useCallback(
    (room: Room) => {
      showNotification('success', {
        message: tPath('notification.message'),
        description: tPath('notification.description')
      });

      addItem({
        title: room.title,
        daily: '2',
        stay: '08/12/2023 - 10/12/2023',
        numberGuests: '2',
        quantity: 1,
        price: room.price,
        id: room.id
      });
    },
    [addItem, tPath]
  );

  const renderRoomCards = () =>
    rooms.map(room => (
      <RoomCard
        key={room.id}
        title={room.title}
        comments={room.comments}
        rating={room.rating}
        description={room.description}
        price={room.formattedPrice || 'Loading...'}
        imageUrl={room.image_url}
        onClick={() => addItemToCart(room)}
      />
    ));

  const renderEvaluationCards = () =>
    comments.map(comment => (
      <EvaluationCard
        key={comment.id}
        name={comment.name}
        description={comment.comment}
        date={formatDate(comment.date)}
        rating={Number(comment.rating)}
      />
    ));

  return (
    <div className="home-container">
      <BottomContent />
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
              {renderRoomCards()}
            </div>
          </section>
          <section>
            <Title text={tPath('sectionEvaluation.title')} />
            {comments.length > 0 && (
              <CustomCarousel items={renderEvaluationCards()} />
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
