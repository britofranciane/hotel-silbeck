import React from 'react';
import { Rate, RateProps } from 'antd';

interface Props extends RateProps {
  rating: number;
}

const StarRating: React.FC<Props> = ({ rating, ...rest }) => {
  return <Rate disabled {...rest} allowHalf defaultValue={rating} />;
};

export default StarRating;
