import { createSelector } from 'reselect';

import { ratesSelectors } from 'ducks/rates';
import { balancesSelectors } from 'ducks/balances';

export const assets = createSelector(
  ratesSelectors.assetsWithPrice,
  balancesSelectors.balances,
  (assets, balances) =>
    assets.map(asset => ({ ...asset, balance: balances[asset.id] }))
);
