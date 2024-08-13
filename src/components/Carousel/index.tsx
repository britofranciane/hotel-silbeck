import React from 'react';
import { Carousel, CarouselProps } from 'antd';
import './styles.scss';

interface Props extends CarouselProps {
  items: React.ReactNode[];
  infinite?: boolean;
}

const CustomCarousel: React.FC<Props> = ({
  items,
  infinite = true,
  ...rest
}) => {
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 2) {
    groupedItems.push(
      <div className="carousel-slide" key={i}>
        <div className="carousel-item">{items[i]}</div>
        {items[i + 1] && <div className="carousel-item">{items[i + 1]}</div>}
      </div>
    );
  }

  return (
    <Carousel
      className={'carousel'}
      autoplay
      arrows
      infinite={infinite}
      {...rest}
    >
      {groupedItems}
    </Carousel>
  );
};

export default CustomCarousel;
