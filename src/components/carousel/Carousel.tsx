import React, { useState } from 'react';
import classNames from 'classnames';

import './Carousel.scss';

const Carousel = () => {
  const images = [
    './img/carousel-img/1.jpg',
    './img/carousel-img/2.jpg',
    './img/carousel-img/3.jpg',
    './img/carousel-img/4.jpg',
  ];

  const [itemIndex, setItemIndex] = useState(0);

  setTimeout(() => {
    if (itemIndex === images.length - 1) {
      setItemIndex(0);
    } else {
      setItemIndex(itemIndex + 1);
    }
  }, 2000);

  return (
    <div className="carousel">
      <div className="carousel__block">
        <ul
          className="carousel__list"
          style={{
            transform: `translateX(-${itemIndex * 325}px)`,
          }}
        >
          {images.map((image) => (
            <li
              key={image}
            >
              <img src={image} alt="images" className="carousel__img" />
            </li>
          ))}
        </ul>
      </div>
      <div className="slider-points">
        {images.map(image => (
          <div
            className={classNames('slider-point', { 'avtive-point': images[itemIndex] === image })}
            key={image}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
