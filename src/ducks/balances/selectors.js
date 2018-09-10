import { createSelector } from 'reselect';

const plain = state => state.balances;
const balances = createSelector(plain, balances =>
  balances.reduce(
    (res, balance) => ({ ...res, [balance.id]: balance.amount }),
    {}
  )
);

export default {
  plain,
  balances
};
