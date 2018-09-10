import { createAction } from 'redux-act';

const UPDATE_BALANCES = 'app/balances/UPDATE_BALANCES';

const updateBalances = createAction(UPDATE_BALANCES);

export default {
  updateBalances
};
