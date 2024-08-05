import React from 'react';
import { Select, SelectProps } from 'antd';
import './styles.scss';

interface OptionType {
  value: string;
  label: string;
  disabled?: boolean;
}

interface Props extends SelectProps<string> {
  options: OptionType[];
  onChange?: (value: string) => void;
  label?: string;
}

const CustomSelect: React.FC<Props> = ({
  label,
  options,
  onChange,
  ...props
}) => {
  return (
    <div className={label ? 'custom-select' : 'custom-select-default'}>
      {label && <label className="custom-select__label">{label}</label>}
      <Select
        defaultValue={options[0]?.value}
        onChange={onChange}
        {...props}
        className="custom-select__select"
      >
        {options.map(option => (
          <Select.Option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default CustomSelect;
