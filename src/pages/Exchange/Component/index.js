import React from 'react';

import SignInput from 'elements/SignInput';
import AssetSelector from 'components/AssetSelector';
import cn from 'utils/bem';

import { propTypes } from './props';
import './style.styl';

const b = cn('exchange');

const Component = ({
  fields,
  onInputChange,
  onInputFocus,
  onAssetChange,
  data: { assets }
  //onSubmitExchange
}) => (
  <div className={b()}>
    <div className={b('row', 'top')}>
      <AssetSelector
        className={b('asset-selector')}
        assets={assets}
        selectedAsset={fields.fromAsset}
        onChange={onAssetChange('fromAsset')}
      />
      <SignInput
        sign="+"
        autoFocus
        className={b('input')}
        value={fields.fromAmount}
        onChange={onInputChange('fromAmount')}
        onFocus={onInputFocus('fromAmount')}
      />
    </div>
    <div className={b('row', 'bottom')}>
      <AssetSelector
        className={b('asset-selector')}
        assets={assets}
        selectedAsset={fields.toAsset}
        onChange={onAssetChange('toAsset')}
      />
      <SignInput
        sign="-"
        className={b('input')}
        value={fields.toAmount}
        onChange={onInputChange('toAmount')}
        onFocus={onInputFocus('toAmount')}
      />
    </div>
    <div className={b('pointer')} />
  </div>
);

Component.propTypes = propTypes;

export default Component;
