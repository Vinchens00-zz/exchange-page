import React from 'react';

import cn from 'utils/bem';
import AssetAmount from 'elements/AssetAmount';

import { propTypes } from './props';
import './style.styl';

const LARGE_NUMBER_COUNT = 2;

const largePartRegex = new RegExp(
  `^0*([0-9]+.{0,1}[0-9]{0,${LARGE_NUMBER_COUNT}})[0-9]*$`
);

const b = cn('rate-panel');

const RatePanel = ({ className, onClick, rate, fromAssetId, toAssetId }) => {
  rate = String(rate);
  const largeRate = rate.replace(largePartRegex, '$1');
  const smallRate = rate.replace(largeRate, '');

  return (
    <button className={b(null, null, className)} onClick={onClick}>
      <span className={b('large-part')}>
        <AssetAmount
          assetId={fromAssetId}
          amount="1"
          assetSignClassName={b('asset-sign')}
        />
        <span> = </span>
        <AssetAmount
          assetId={toAssetId}
          amount={largeRate}
          assetSignClassName={b('asset-sign')}
        />
      </span>
      <span className={b('small-part')}>{smallRate}</span>
    </button>
  );
};

RatePanel.propTypes = propTypes;

export default RatePanel;
