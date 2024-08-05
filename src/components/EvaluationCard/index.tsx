import React from 'react';
import './styles.scss';
import { GoPerson } from 'react-icons/go';
import StarRating from '../StarRating';

interface Props {
  name: string;
  description: string;
  date: string;
  rating: number;
}

const EvaluationCard: React.FC<Props> = ({
  name,
  description,
  date,
  rating
}) => {
  return (
    <div className="evaluation-card">
      <div className="evaluation-card__user-image">
        <GoPerson />
      </div>
      <div className="evaluation-card__content">
        <h2 className="evaluation-card__content__name">{name}</h2>
        <p>{description}</p>
        <div className="evaluation-card__rating">
          <span>{date}</span>
          <StarRating rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default EvaluationCard;
