import { createReducer } from 'redux-act';

import actions from './actions';

const DEFAULT_STATE = {
  operations: []
};

const loadSuccess = (state, operations = []) => {
  return { ...state, operations };
};

const reducer = createReducer(
  {
    [actions.loadSuccess]: loadSuccess
  },
  DEFAULT_STATE
);

export default reducer;
