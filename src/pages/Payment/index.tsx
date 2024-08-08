import React, { useState } from 'react';
import FormPayment from './FormPayment';
import ShoppingCart from './ShoppingCart';
import { FaCheck } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { CartItem, useCart } from '@context/CartContext';
import { showNotification } from '@components/CustomNotification';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import { formatCurrency } from '@utils/formatCurrency';
import { useLocale } from '@context/LocaleContext';

const Payment: React.FC = () => {
  const [quantity, setQuantity] = useState(0);
  const { cart, removeItem } = useCart();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const tPath = (path: string) => t(`pages.payment.${path}`);
  const { currency } = useLocale();

  const calculateTotalValue = () => {
    let value = 0;
    cart.map(({ quantity, price }: CartItem) => {
      value = value + quantity * price;
    });
    return formatCurrency(value, currency);
  };

  const confirm = () => {
    showNotification('success', {
      message: 'Reserva efetuada com Sucesso',
      description: 'Você pode acompanhar os detalhes no e-mail de cadastro.'
    });
    navigate('/');
  };

  return (
    <div className="payment-page">
      <div>
        <FormPayment />
      </div>
      <div className="payment-page__booking-summary">
        <h3 className="payment-page__booking-summary__title">
          {tPath('reservationSummary.title')}
        </h3>
        {cart.length <= 0 && <p>Você ainda não tem reservas.</p>}
        {cart.map(
          ({ title, daily, stay, numberGuests, quantity, price, id }, i) => (
            <ShoppingCart
              key={i}
              id={id}
              title={title}
              daily={daily}
              stay={stay}
              numberGuests={numberGuests}
              quantity={quantity}
              price={formatCurrency(price, currency)}
              setQuantity={setQuantity}
              removeCard={id => removeItem(id)}
            />
          )
        )}
        <div className="payment-page__booking-summary__value">
          <div className="payment-page__booking-summary__value__total">
            <span>{tPath('reservationSummary.totalAmount')}</span>
            <span>{calculateTotalValue()}</span>
          </div>
          <div className="payment-page__booking-summary__value__confirm">
            <button>{tPath('reservationSummary.cancel')}</button>
            <button className="payment-page__button" onClick={confirm}>
              <FaCheck />
              {tPath('reservationSummary.confirmPayment')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
