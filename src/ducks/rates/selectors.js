import { ASSETS } from 'constants/assets';

import { createSelector } from 'reselect';

import { floor } from 'utils/math';

const assetsToExchange = Object.values(ASSETS);
const PRECISION = 8;

const data = state => state.rates;

const base = createSelector(data, data => data.base);
const baseRates = createSelector(data, data => data.rates);

/* 
  This function builds data structure with cross rates for all supported assets:
  {
    "USD": {
      "EUR": 1.2,
      "USD: 1
    },
    "EUR": {
      "EUR": 1,
      "USD: 0.8
    }
  }
*/
const rates = createSelector(baseRates, baseRates =>
  assetsToExchange.reduce(
    (result, fromAsset) => ({
      ...result,
      [fromAsset]: assetsToExchange.reduce(
        (result, toAsset) => ({
          ...result,
          [toAsset]:
            floor(baseRates[fromAsset] / baseRates[toAsset], PRECISION) || 0
        }),
        {}
      )
    }),
    {}
  )
);

/*
  It creates an array which can be used for selectors/dropdowns/etc
*/
const assetsWithPrice = createSelector(rates, rates =>
  assetsToExchange.map(asset => ({
    name: asset,
    id: asset,
    rates: rates[asset]
  }))
);

export default {
  base,
  rates,
  assetsWithPrice
};
