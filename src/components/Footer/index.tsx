import React from 'react';
import Logo from '@assets/logo-white.svg';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import './styles.scss';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const tPath = (path: string) => t(`components.footer.${path}`);

  return (
    <footer className="footer-component">
      <div className="footer-component__content">
        <img src={Logo} alt="Hotel Silbeck logo" />
        <div className="footer-component__content__container-menu">
          <ul className="footer-component__address">
            <li>{tPath('address')}</li>
            <li>{tPath('location')}</li>
            <li>{tPath('phone')}</li>
            <li>{tPath('emailAddress')}</li>
          </ul>
          <ul className="footer-component__address">
            <li>
              <b>{tPath('aboutUs')}</b>
            </li>
            <li>{tPath('ourHistory')}</li>
            <li>{tPath('contact')}</li>
            <li>{tPath('termsAndConditions')}</li>
          </ul>
          <ul className="footer-component__address">
            <li>
              <b>{tPath('otherServices')}</b>
            </li>
            <li>{tPath('tours')}</li>
            <li>{tPath('spa')}</li>
            <li>{tPath('bookSpace')}</li>
          </ul>
        </div>
      </div>
      <div className="footer-component__container">
        <div>
          <p>{tPath('socialMedia')}</p>
          <ul className="footer-component__address footer-component__network">
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>
        <div>
          <p>{tPath('newsletter')}</p>

          <div className="footer-component__container-email">
            <input
              type="text"
              placeholder="e-mail"
              className={'footer-component__input'}
            />
            <button className={'footer-component__button'}>
              {tPath('send')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
