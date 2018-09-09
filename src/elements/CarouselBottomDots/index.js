import React from 'react';

import cn from 'utils/bem';

import './style.styl';
import { propTypes } from './props';

const b = cn('carousel-bottom-dots');

const getIndexes = (count, inc) => {
  const arr = [];
  for (let i = 0; i < count; i += inc) {
    arr.push(i);
  }
  return arr;
};

const CarouselBottomDots = ({
  slideCount,
  slidesToScroll,
  goToSlide,
  currentSlide
}) => (
  <ul className={b()}>
    {getIndexes(slideCount, slidesToScroll).map(index => {
      return (
        <li className={b('point')} key={index}>
          <button
            className={b('button', { active: currentSlide === index })}
            onClick={() => goToSlide(index)}
          >
            &bull;
          </button>
        </li>
      );
    })}
  </ul>
);

CarouselBottomDots.propTypes = propTypes;

export default CarouselBottomDots;
