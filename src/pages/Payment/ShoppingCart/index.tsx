import React, { useState } from 'react';
import './styles.scss';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ButtonGroup from 'antd/es/button/button-group';
import { Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
interface Props {
  title: string;
  stay: string;
  quantity: number;
  numberGuests: string;
  daily: string;
  price: string;
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
  const [count, setCount] = useState(5);

  const increase = () => {
    setCount(count + 1);
  };

  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };

  const random = () => {
    const newCount = Math.floor(Math.random() * 100);
    setCount(newCount);
  };

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
          <span className="shopping-cart-component__value__price">{price}</span>
          <div className="shopping-cart-component__value__quantity">
            <ButtonGroup>
              <Button onClick={decline} icon={<MinusOutlined />} />
              <Button icon={count} />
              <Button onClick={increase} icon={<PlusOutlined />} />
            </ButtonGroup>
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
