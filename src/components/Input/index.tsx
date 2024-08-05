import React, { InputHTMLAttributes } from 'react';
import './styles.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label: string;
  required?: boolean;
}

const Input: React.FC<Props> = ({
  placeholder,
  required = false,
  label,
  type,
  name
}) => {
  return (
    <div className="container-input">
      <label htmlFor={name} className="input-label">
        {label} <span>{required && '*'} </span>
      </label>
      {/* <Input placeholder="Basic usage" /> */}
      <input
        name={name}
        className={'input-component'}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;
