import React from 'react';
import { Carousel, CarouselProps } from 'antd';
import './styles.scss';

interface Props extends CarouselProps {
  items: React.ReactNode;
}

const CustomCarousel: React.FC<Props> = ({ items }) => {
  return (
    <Carousel autoplay arrows infinite={true}>
      {items}
    </Carousel>
  );
};

export default CustomCarousel;
