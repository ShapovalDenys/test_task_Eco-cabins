import React from 'react';
import './Header.scss';

import Navigation from '../navigation/Navigation';

const Header = () => (
  <section id="home" className="header">
    <Navigation />
    <div className="header__content content-wrap">
      <div className="content-wrap__description">
        <h1>Duurzame tiny huisjes</h1>
        <p>
          Een ecologisch tiny huisje is zoveel
          mogelijk opgebouwd uit
          duurzame natuurlijke materialen
        </p>
      </div>
      <div className="content-wrap__video">
        <a href="https://www.youtube.com/watch?v=lNKhtAXchP0" className="content-wrap__video-box-link">
          <img src="./img/BTNPlay.svg" alt="button play" className="content-wrap__video-box-img" />
          Bekijk de film
        </a>
      </div>
      <ul className="content-wrap__socials">
        <li className="content-wrap__socials-item">
          <a className="content-wrap__socials-link" href="https://www.instagram.com/__aspire__/">Instagram</a>
        </li>
        <li className="content-wrap__socials-item">
          <a className="content-wrap__socials-link" href="https://www.facebook.com/vkontaktedenshapoval">Facebook</a>
        </li>
        <li className="content-wrap__socials-item">
          <a className="content-wrap__socials-link" href="https://www.linkedin.com/in/denys-shapoval-831a74143/">Linkedin</a>
        </li>
      </ul>
    </div>
  </section>
);

export default Header;
