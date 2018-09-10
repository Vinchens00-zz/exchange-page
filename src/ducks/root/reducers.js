import { combineReducers } from 'redux';

import ratesReducer from '../rates';
import historyReducer from '../history';
import balancesReducer from '../balances';

const rootReducer = combineReducers({
  rates: ratesReducer,
  history: historyReducer,
  balances: balancesReducer
});

export default rootReducer;
