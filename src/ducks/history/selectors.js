import { createSelector } from 'reselect';

const history = state => state.history;
const operations = createSelector(history, history => history.operations);

export default {
  history,
  operations
};
