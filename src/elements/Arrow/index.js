import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft
} from '@fortawesome/free-solid-svg-icons';

import cn from 'utils/bem';

import './style.styl';

import { propTypes } from './props';

const b = cn('arrow');

const Arrow = ({ onClick, mod, className, disabled }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={b(null, mod, className)}
  >
    <FontAwesomeIcon
      className={b('icon')}
      icon={mod === 'left' ? faArrowAltCircleLeft : faArrowAltCircleRight}
    />
  </button>
);

Arrow.propTypes = propTypes;

export default Arrow;
