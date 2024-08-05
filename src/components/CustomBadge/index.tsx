import { Badge, BadgeProps } from 'antd';
import React from 'react';

interface Props extends BadgeProps {
  count: number;
  children: React.ReactNode;
}

const CustomBadge: React.FC<Props> = ({ count, children }) => (
  <Badge count={count}>{children}</Badge>
);

export default CustomBadge;
