import { combineReducers } from 'redux';

import ratesReducer from '../rates';
import historyReducer from '../history';

const rootReducer = combineReducers({
  rates: ratesReducer,
  history: historyReducer
});

export default rootReducer;
