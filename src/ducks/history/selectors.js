import { createSelector } from 'reselect';

const history = state => state.history;
const operations = createSelector(history, history => history.operations);

const recentOperations = createSelector(operations, operations =>
  operations.sort((a, b) => a.date < b.date)
);

export default {
  history,
  operations,
  recentOperations
};
