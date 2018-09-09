import { ASSET_SIGN } from 'constants/assets';

import React from 'react';

import cn from 'utils/bem';

import { propTypes, defaultProps } from './props';

const b = cn('asset-amount');

const AssetAmount = ({
  className,
  assetId,
  amount,
  sign,
  assetSignClassName
}) => (
  <span className={b(null, null, className)}>
    {sign && <span className={b('sign')}>{sign}</span>}
    <span className={b('asset-sign', null, assetSignClassName)}>
      {ASSET_SIGN[assetId]}
    </span>
    <span className={b('amount')}>{amount}</span>
  </span>
);

AssetAmount.propTypes = propTypes;
AssetAmount.defaultProps = defaultProps;

export default AssetAmount;
