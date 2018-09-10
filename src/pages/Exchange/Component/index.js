import React from 'react';

import SignInput from 'elements/SignInput';
import AssetSelector from 'components/AssetSelector';
import Button from 'elements/Button';
import RatePanel from 'elements/RatePanel';
import cn from 'utils/bem';

import { mask } from '../Container/validate';

import { propTypes } from './props';
import './style.styl';

const b = cn('exchange');

const MAX_LENGTH = 12;

const Component = ({
  fields,
  onInputChange,
  onInputFocus,
  onAssetChange,
  data: { assets, rate, revertRate },
  validation,
  onSubmitExchange
}) => (
  <div className={b()}>
    <div className={b('info-panel')}>
      <RatePanel
        className={b('rate-panel')}
        fromAssetId={fields.fromAsset.id}
        toAssetId={fields.toAsset.id}
        rate={rate}
      />
      <Button
        className={b('exchange-button')}
        onClick={onSubmitExchange}
        disabled={!validation.isValid}
      >
        Exchange
      </Button>
    </div>

    <div className={b('row', 'top')}>
      <AssetSelector
        className={b('asset-selector')}
        assets={assets}
        selectedAsset={fields.fromAsset}
        onChange={onAssetChange('fromAsset')}
      />
      <SignInput
        sign="-"
        autoFocus
        className={b('input')}
        value={fields.fromAmount}
        onChange={onInputChange('fromAmount')}
        onFocus={onInputFocus('fromAmount')}
        mask={mask}
        maxLength={MAX_LENGTH}
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
        sign="+"
        className={b('input')}
        value={fields.toAmount}
        onChange={onInputChange('toAmount')}
        onFocus={onInputFocus('toAmount')}
        mask={mask}
        maxLength={MAX_LENGTH}
      />
    </div>
    <div className={b('pointer')} />
    <div className={b('info-panel', 'bottom')}>
      <RatePanel
        className={b('rate-panel')}
        fromAssetId={fields.toAsset.id}
        toAssetId={fields.fromAsset.id}
        rate={revertRate}
      />
    </div>
  </div>
);

Component.propTypes = propTypes;

export default Component;
