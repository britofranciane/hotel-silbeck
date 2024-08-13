import React from 'react';
import './styles.scss';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ButtonGroup from 'antd/es/button/button-group';
import { Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useCart } from '@context/CartContext';
import { showConfirm } from '@components/ConfirmDialog';
import CustomButton from '@components/CustomButton';
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
  daily,
  price,
  removeCard,
  id
}) => {
  const { t } = useTranslation();
  const tPath = (path: string) => t(`pages.payment.shoppingCart.${path}`);
  const { updateItem, removeItem } = useCart();

  const triggerConfirm = () => {
    // adicionar confirm antes de deletar item do carrinho
    showConfirm({
      title: 'Are you sure you want to delete this task?',
      content: 'This action cannot be undone.',
      onOk: handleDelete,
      onCancel: handleCancel,
      okText: 'Yes, delete it',
      cancelText: 'No, keep it',
      width: 400
    });
  };

  const increase = () => {
    updateItem(id, quantity + 1);
  };

  const decline = () => {
    if (quantity > 1) {
      let newQuantity = quantity - 1;
      updateItem(id, newQuantity);
    } else {
      removeItem(id);
    }
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
              <CustomButton
                onClick={decline}
                icon={<MinusOutlined />}
                disabled={!quantity}
              />
              <span>{quantity}</span>
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
