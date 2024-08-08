import React from 'react';
import { useTranslation } from 'react-i18next';
import StarRating from '../StarRating';
import { MdPerson } from 'react-icons/md';
import { FaWifi, FaMugHot, FaSmoking, FaConciergeBell } from 'react-icons/fa';
import { PiMonitor } from 'react-icons/pi';
import './styles.scss';

interface RoomCardProps {
  title: string;
  comments: string;
  rating: number;
  description: string;
  price: string;
  imageUrl: string;
  onClick: () => void;
}

const RoomCard: React.FC<RoomCardProps> = ({
  title,
  comments,
  rating,
  description,
  price,
  imageUrl,
  onClick
}) => {
  const { t } = useTranslation();

  const tPath = (path: string) => t(`components.roomCards.${path}`);

  return (
    <div className={'room-card'}>
      <img src={imageUrl} alt={title} className={'image'} />
      <div className={'room-card__content'}>
        <h2 className={'room-card__content__title'}>{title}</h2>
        <div className={'room-card__content__container-rating'}>
          <div className={'room-card__content__container-rating__rating'}>
            <StarRating rating={rating} />
            <p>
              {comments} {tPath('comments')}
            </p>
          </div>
          <div className="person">
            <MdPerson /> <span>x3</span>
          </div>
        </div>
        <p className={'room-card__description'}>{description}</p>

        <div className={'room-card__container'}>
          <FaWifi />
          <FaConciergeBell />
          <FaMugHot />
          <PiMonitor />
          <FaSmoking />
        </div>

        <div className={'room-card__footer'}>
          <p>
            {tPath('stay')}
            <br />
            <span>{price}</span>
          </p>
          <button className={'reserveButton'} onClick={onClick}>
            {tPath('reserve')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
