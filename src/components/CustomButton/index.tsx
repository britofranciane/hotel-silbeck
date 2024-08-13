import React from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import './styles.scss';

type Variant = 'primary' | 'default' | 'dashed' | 'text' | 'link';
type Size = 'small' | 'middle' | 'large';

interface Props extends AntButtonProps {
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const CustomButton: React.FC<Props> = ({
  variant = 'primary',
  size = 'large',
  icon,
  children,
  ...props
}) => {
  return (
    <AntButton size={size} type={variant} icon={icon} {...props}>
      {children}
    </AntButton>
  );
};

export default CustomButton;
