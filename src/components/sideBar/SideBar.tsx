import React, { useState } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import './SideBar.scss';
import ReactResizeDetector from 'react-resize-detector';

type Props = {
  outerContainerId: string;
  pageWrapId: string;
};

export default (props: Props) => {
  const [menuWidth, setMenuWidth] = useState('20%');

  const onResize = (width: number) => {
    if (width >= 620) {
      setMenuWidth('20%');
    } else if (width < 620) {
      setMenuWidth('40%');
    }
  };

  return (
    <>
      <ReactResizeDetector handleWidth onResize={onResize} />
      <Menu {...props} disableAutoFocus width={menuWidth} right>
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#duurzame-materialen" className="navigation__link">Modellen</a>
          </li>
          <li className="navigation__item">
            <a href="#innovatie" className="navigation__link">Kopen</a>
          </li>
          <li className="navigation__item">
            <a href="#characteristics" className="navigation__link">Huren</a>
          </li>
          <li className="navigation__item">
            <a href="#characteristics" className="navigation__link">Nieuws</a>
          </li>
          <li className="navigation__item">
            <a href="mailto:info@eco-cabins.com" className="navigation__link">Contact</a>
          </li>
        </ul>
      </Menu>
    </>
  );
};
