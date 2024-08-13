import React, { InputHTMLAttributes } from 'react';
import './styles.scss';
import { ErrorMessage } from 'formik';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label: string;
  required?: boolean;
  value?: string;
  error?: string;
}

const Input: React.FC<Props> = ({
  placeholder,
  required = false,
  label,
  type,
  name,
  value,
  error,
  onChange,
  onBlur,
  ...rest
}) => {
  return (
    <div className="container-input">
      <label htmlFor={name} className="input-label">
        {label} <span>{required && '*'} </span>
      </label>
      <input
        name={name}
        className={`input-component ${error ? 'input-error' : ''}`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
      {error && (
        <ErrorMessage
          name={name}
          component="div"
          className="input-error-message"
        />
      )}
    </div>
  );
};

export default Input;
