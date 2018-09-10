import React from 'react';

import cn from 'utils/bem';

import './style.styl';
import { propTypes } from './props';

const b = cn('button');

const Button = ({ className, children, onClick, disabled }) => (
  <button
    className={b(null, null, className)}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

Button.propTypes = propTypes;

export default Button;
