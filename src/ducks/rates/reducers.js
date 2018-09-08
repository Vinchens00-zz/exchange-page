import { createReducer } from 'redux-act';

import actions from './actions';

const DEFAULT_STATE = {
  base: null,
  rates: {}
};

const update = (state, { base, rates }) => {
  return { ...state, base, rates };
};

const reducer = createReducer(
  {
    [actions.update]: update
  },
  DEFAULT_STATE
);

export default reducer;
