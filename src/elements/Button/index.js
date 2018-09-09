import React from 'react';

import cn from 'utils/bem';

import './style.styl';
import { propTypes } from './props';

const b = cn('button');

const Button = ({ className, children, onClick }) => (
  <button className={b(null, null, className)} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = propTypes;

export default Button;
