import { takeEvery, call, put, select } from 'redux-saga/effects';

import localStorage from 'utils/localStorage';
import { operationToApi } from 'formatters/history';

import actions from './actions';
import selectors from './selectors';

const HISTORY_PREFIX = 'history-operations';

export function* createOperation({ payload: operation }) {
  const operations = yield select(selectors.operations);

  yield call(
    localStorage.set,
    HISTORY_PREFIX,
    operations.concat(operationToApi(operation))
  );
  yield put(actions.load());
}

export function* loadHistory() {
  const operations = yield call(localStorage.get, HISTORY_PREFIX);
  yield put(actions.loadSuccess(operations || []));
}

export function* watch() {
  yield takeEvery(actions.create, createOperation);
  yield takeEvery(actions.load, loadHistory);
}

export default { watch };
