import React from 'react';

import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <a className="footer__link" href="mailto:info@eco-cabins.com">info@eco-cabins.com</a>
    <a href="#home" className="navigation__logo-link footer__logo-link">
      <img className="navigation__logo" src="./img/Logo-horizontal.svg" alt="logo" />
    </a>
    <ul className="footer__nav">
      <li className="footer__nav-item">
        <a className="footer__link" href="https://developer.mozilla.org/ru/docs/Web/HTTP/%D0%9A%D1%83%D0%BA%D0%B8">Cookies</a>
      </li>
      <li className="footer__nav-item footer__nav-item-last-link">
        <a className="footer__link" href="https://policies.google.com/privacy?hl=ru">Privacybeleid</a>
      </li>
    </ul>
  </footer>
);

export default Footer;
