import { ASSETS } from 'constants/assets';

import { createReducer } from 'redux-act';

import { floor } from 'utils/math';

import actions from './actions';

const DEFAULT_STATE = Object.values(ASSETS).map(id => ({
  id,
  amount: floor(Math.random() * 800, 2)
}));

const updateBalances = (balances, updatedBalances = []) => {
  const idsToUpdate = updatedBalances.map(balance => balance.id);

  return balances
    .filter(balance => !idsToUpdate.includes(balance.id))
    .concat(updatedBalances);
};

const reducer = createReducer(
  {
    [actions.updateBalances]: updateBalances
  },
  DEFAULT_STATE
);

export default reducer;
