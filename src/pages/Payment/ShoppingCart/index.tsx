import React from 'react';
import './styles.scss';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoAdd } from 'react-icons/io5';
import { RiSubtractLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

interface Props {
  title: string;
  stay: string;
  quantity: number;
  numberGuests: string;
  daily: string;
  price: number;
  setQuantity: (quantity: number) => void;
  removeCard: (quantity: number) => void;
  id: number;
}

const ShoppingCart: React.FC<Props> = ({
  title,
  stay,
  quantity,
  numberGuests,
  setQuantity,
  daily,
  price,
  removeCard,
  id
}) => {
  const { t } = useTranslation();
  const tPath = (path: string) => t(`pages.payment.shoppingCart.${path}`);

  return (
    <div className={'shopping-cart-component'}>
      <div className="container">
        <div className={'shopping-cart-component__content'}>
          <h3 className={'shopping-cart-component__title'}>{title}</h3>
          <span>
            {tPath('dailyRates')}: {daily}
          </span>
          <span>
            {tPath('stayPeriod')}: {stay}
          </span>
          <span>
            {tPath('guestQuantity')}: {numberGuests}
          </span>
        </div>
        <div className="shopping-cart-component__value">
          <span className="shopping-cart-component__value__price">
            R${price},00
          </span>
          <div className="shopping-cart-component__value__quantity">
            <button onClick={() => setQuantity(quantity + 1)}>
              <RiSubtractLine />
            </button>
            {quantity}
            <button onClick={() => setQuantity(quantity - 1)}>
              <IoAdd />
            </button>
          </div>
        </div>
      </div>

      <div className="shopping-cart-component__delete">
        <button onClick={() => removeCard(id)}>
          <FaRegTrashAlt />
          {tPath('delete')}
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
