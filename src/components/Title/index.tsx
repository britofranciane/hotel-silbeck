import React from 'react';
import './styles.scss';

interface RoomCardProps {
  text: string;
}

const Title: React.FC<RoomCardProps> = ({ text }) => {
  return <h2 className={'title-component'}>{text}</h2>;
};

export default Title;
