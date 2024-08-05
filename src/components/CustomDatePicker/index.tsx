import React from 'react';
import { DatePicker as AntDatePicker } from 'antd';
import { Moment } from 'moment';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';
import { PickerProps } from 'antd/es/date-picker/generatePicker';
import './styles.scss';

const CustomDatePicker =
  AntDatePicker.generatePicker<Moment>(momentGenerateConfig);

interface CustomDatePickerProps extends PickerProps {
  onChange?: (date: Date) => void;
  label?: string;
}

const DatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  onChange,
  ...props
}) => {
  return (
    <div className="custom-date-picker">
      {label && <label className="custom-date-picker__label">{label}</label>}
      <CustomDatePicker {...props} onChange={onChange} />
    </div>
  );
};

export default DatePicker;
