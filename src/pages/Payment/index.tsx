import React, { useRef, useState, useEffect } from 'react';
import FormPayment from './FormPayment';
import ShoppingCart from './ShoppingCart';
import { FaCheck } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { CartItem, useCart } from '@context/CartContext';
import './styles.scss';
import { formatCurrency } from '@utils/formatCurrency';
import { useLocale } from '@context/LocaleContext';
import { FormikProps } from 'formik';
import CustomButton from '@components/CustomButton';

const Payment: React.FC = () => {
  const { cart, removeItem } = useCart();
  const { t } = useTranslation();
  const tPath = (path: string) => t(`pages.payment.${path}`);
  const { currency } = useLocale();

  const formikRef = useRef<FormikProps<any>>(null);
  const [formattedCart, setFormattedCart] = useState<CartItem[]>([]);
  const [totalValue, setTotalValue] = useState<string>('0');

  const setQuantity = (id: string, quantity: number) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
  };

  useEffect(() => {
    const formatCartItems = async () => {
      const formattedItems = await Promise.all(
        cart.map(async item => {
          const formattedPrice = await formatCurrency(item.price, currency);
          return { ...item, formattedPrice };
        })
      );
      setFormattedCart(formattedItems);
    };

    const calculateTotalValue = async () => {
      let value = 0;
      cart.forEach(({ quantity, price }: CartItem) => {
        value += quantity * price;
      });
      const formattedTotal = await formatCurrency(value, currency);
      setTotalValue(formattedTotal);
    };

    formatCartItems();
    calculateTotalValue();
  }, [cart, currency]);

  const handleSubmit = () => {
    if (formikRef.current) {
      formikRef.current.submitForm();
    }
  };

  return (
    <div className="payment-page">
      <FormPayment ref={formikRef} onSubmit={handleSubmit} />

      <div className="payment-page__booking-summary">
        <h3 className="payment-page__booking-summary__title">
          {tPath('reservationSummary.title')}
        </h3>
        {cart.length <= 0 && <p>Você ainda não tem reservas.</p>}
        {formattedCart.map(
          ({
            title,
            daily,
            stay,
            numberGuests,
            quantity,
            formattedPrice,
            id
          }) => (
            <ShoppingCart
              key={id}
              id={id}
              title={title}
              daily={daily}
              stay={stay}
              numberGuests={numberGuests}
              quantity={quantity}
              price={formattedPrice}
              setQuantity={setQuantity}
              removeCard={id => removeItem(id)}
            />
          )
        )}
        <div className="payment-page__booking-summary__value">
          <div className="payment-page__booking-summary__value__total">
            <span>{tPath('reservationSummary.totalAmount')}</span>
            <span>{totalValue}</span>
          </div>
          <div className="payment-page__booking-summary__value__confirm">
            <button>{tPath('reservationSummary.cancel')}</button>
            <CustomButton
              type="submit"
              className="payment-page__button"
              onClick={handleSubmit}
            >
              <FaCheck />
              {tPath('reservationSummary.confirmPayment')}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
