import { ASSET_SIGN } from 'constants/assets';

import React from 'react';

import cn from 'utils/bem';

import { propTypes } from './props';
import './style.styl';

const b = cn('rate-panel');

const RatePanel = ({ className, onClick, rate, fromAssetId, toAssetId }) => (
  <button className={b(null, null, className)} onClick={onClick}>
    {`${ASSET_SIGN[fromAssetId]}1 = ${ASSET_SIGN[toAssetId]}${rate}`}
  </button>
);

RatePanel.propTypes = propTypes;

export default RatePanel;
