import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';

import cn from 'utils/bem';
import AssetAmount from 'elements/AssetAmount';

import { propTypes } from './props';
import './style.styl';

const b = cn('operation');

const Operation = ({ className, operation }) => (
  <div className={b(null, null, className)}>
    <div className={b('icon')}>
      <div className={b('icon-circle')}>
        <FontAwesomeIcon className={b('icon-svg')} icon={faSync} />
      </div>
    </div>
    <div className={b('content')}>
      <span className={b('assets')}>{`Exchanged ${operation.fromAsset} to ${
        operation.toAsset
      }`}</span>
      <span className={b('date')}>
        {format(operation.date, 'MMM Do YYYY, H:m')}
      </span>
    </div>
    <div className={b('numbers')}>
      <AssetAmount
        className={b('amount', 'from')}
        amount={operation.fromAmount}
        sign="-"
        assetId={operation.fromAsset}
        assetSignClassName={b('asset-sign', 'from')}
      />
      <AssetAmount
        className={b('amount', 'to')}
        amount={operation.toAmount}
        sign="+"
        assetId={operation.toAsset}
        assetSignClassName={b('asset-sign', 'to')}
      />
    </div>
  </div>
);

Operation.propTypes = propTypes;

export default Operation;
