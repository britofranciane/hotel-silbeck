import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import {
  CustomButton,
  CustomSelect,
  CustomDatePicker
} from '@components/index';
import { useTranslation } from 'react-i18next';
import './styles.scss';

interface Props {
  className?: string;
}

const BottomContent: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  const tPath = (path: string) => t(`components.header.${path}`);

  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' }
  ];

  return (
    <div className={`header-bottom container-header-bottom ${className}`}>
      <div className="header-bottom__form">
        <div className="header-bottom__container">
          <caption className="header-bottom__caption">
            {tPath('bottom.dateOfStay')}
          </caption>
          <CustomDatePicker
            size={'small'}
            placeholder=""
            label={tPath('bottom.checkIn')}
          />
          <CustomDatePicker
            size={'small'}
            placeholder=""
            label={tPath('bottom.checkOut')}
          />
        </div>
        <div className="header-bottom__container">
          <caption className="header-bottom__caption">
            {tPath('bottom.guests')}
          </caption>
          <CustomSelect options={options} label={tPath('bottom.adults')} />
          <CustomSelect options={options} label={tPath('bottom.children')} />
        </div>
        <CustomButton variant="primary" className="header-bottom__form__search">
          <IoSearchSharp />
          <span>{tPath('bottom.search')}</span>
        </CustomButton>
      </div>
    </div>
  );
};

export default BottomContent;
