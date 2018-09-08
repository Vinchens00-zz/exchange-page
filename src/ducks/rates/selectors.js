import { createSelector } from 'reselect';

const data = state => state.rates;

const base = createSelector(data, data => data.base);
const rates = createSelector(data, data => data.rates);

export default {
  base,
  rates
};
