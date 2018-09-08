import { ASSETS } from 'constants/assets';

import { takeEvery, call, put } from 'redux-saga/effects';

import { getRates } from 'api/ratesApi';

import actions from './actions';

export function* fetchRates({ payload: base = ASSETS.USD }) {
  try {
    const res = yield call(getRates, base);
    yield put(actions.update(res));
  } catch (error) {
    // eslint-disable-next-line
    console.error('unexpected error from api', error);
  }
}

export function* watch() {
  yield takeEvery(actions.fetch, fetchRates);
}

export default { watch };
