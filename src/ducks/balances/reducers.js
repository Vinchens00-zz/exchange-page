import { ASSETS } from 'constants/assets';

import { createReducer } from 'redux-act';

import { floor } from 'utils/math';

const DEFAULT_STATE = Object.values(ASSETS).map(id => ({
  id,
  amount: 500 + floor(Math.random() * 800, 2)
}));

const reducer = createReducer({}, DEFAULT_STATE);

export default reducer;
