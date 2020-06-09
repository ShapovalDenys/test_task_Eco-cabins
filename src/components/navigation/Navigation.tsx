import React from 'react';
import './Navigation.scss';

const Navigation = () => (
  <nav className="navigation">
    <a href="/home" className="navigation__logo-link">
      <img className="navigation__logo" src="./img/Logo-horizontal.svg" alt="logo" />
    </a>
    <ul className="navigation__list">
      <li className="navigation__item">
        <a href="#home" className="navigation__link">Modellen</a>
      </li>
      <li className="navigation__item">
        <a href="#home" className="navigation__link">Kopen</a>
      </li>
      <li className="navigation__item">
        <a href="#home" className="navigation__link">Huren</a>
      </li>
      <li className="navigation__item">
        <a href="#home" className="navigation__link">Nieuws</a>
      </li>
      <li className="navigation__item">
        <a href="#home" className="navigation__link navigation__link-active">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
