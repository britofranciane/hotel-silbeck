import React from 'react';
import './styles.scss';
import { Rate, RateProps } from 'antd';

interface Props extends RateProps {
  rating: number;
}

const StarRating: React.FC<Props> = ({ rating }) => {
  return <Rate allowHalf disabled defaultValue={rating} />;
};

export default StarRating;
