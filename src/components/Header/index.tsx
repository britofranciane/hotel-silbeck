import React, { useState } from 'react';
import './styles.scss';
import { FaCartFlatbedSuitcase } from 'react-icons/fa6';
import Logo from '@assets/logo-black.svg';
import { useTranslation } from 'react-i18next';
import '../../locales/i18n.ts';
import {
  CustomBadge,
  CustomButton,
  CustomSelect,
  MobileMenu
} from '@components/index.ts';
import { useLocale } from '@context/LocaleContext.tsx';
import { useCart } from '@context/CartContext.tsx';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const { setLanguage } = useLocale();
  const { cart } = useCart();
  const { t, i18n } = useTranslation();

  const tPath = (path: string) => t(`components.header.${path}`);

  const optionsLocale = [
    { value: 'pt', label: 'BRL' },
    { value: 'en', label: 'USD' },
    { value: 'es', label: 'EUR' }
  ];

  const menuData = [
    { name: tPath('top.menu'), id: 1 },
    { name: tPath('top.rooms'), id: 2 },
    { name: tPath('top.reviews'), id: 3 }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const goToPayment = () => {
    navigate('/payment');
  };

  return (
    <header className="header">
      <div className="mobile-menu">
        <MobileMenu />
      </div>
      <div className="header__top">
        <img src={Logo} alt="Hotel SillBeck" className="header__top__logo" />
        <nav className="header__top__nav desktop-menu">
          <ul>
            {menuData.map(({ name, id }) => (
              <li key={id}>
                <Link to={'/'}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__top__container-reservations desktop-menu">
          <CustomSelect
            className="remove-border"
            size="large"
            options={optionsLocale}
            onChange={v => changeLanguage(v)}
          />
          <CustomBadge count={cart.length}>
            <CustomButton
              size="large"
              className="header__top__reservations"
              onClick={goToPayment}
            >
              <FaCartFlatbedSuitcase />
              <span>{tPath('top.bookings')}</span>
            </CustomButton>
          </CustomBadge>
        </div>
      </div>
    </header>
  );
};

export default Header;
