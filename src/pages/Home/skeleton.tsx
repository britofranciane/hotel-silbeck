import React from 'react';
import { Skeleton, Card } from 'antd';
import './styles.scss';

const HomeSkeleton: React.FC = () => {
  return (
    <div className="page-skeleton">
      <Skeleton active title={true} paragraph={{ rows: 2, width: '20%' }} />
      <div className="home-container__section__rooms-cards">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Card key={idx} className="page-skeleton__card">
            <Skeleton.Image active style={{ width: 300 }} />
            <Skeleton active />
            <Skeleton.Button />
          </Card>
        ))}
      </div>
      <Skeleton active title={true} paragraph={{ rows: 1, width: '20%' }} />
      <div className="home-container__section__rooms-cards">
        {Array.from({ length: 2 }).map((_, id) => (
          <Skeleton avatar paragraph={{ rows: 4 }} key={id} />
        ))}
      </div>
    </div>
  );
};

export default HomeSkeleton;
