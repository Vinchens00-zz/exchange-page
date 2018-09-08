import { combineReducers } from 'redux';

import ratesReducer from '../rates';

const rootReducer = combineReducers({
  rates: ratesReducer
});

export default rootReducer;
