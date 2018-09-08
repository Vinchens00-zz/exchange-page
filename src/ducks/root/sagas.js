import { all } from 'redux-saga/effects';

import { ratesSagas } from '../rates';

function* rootSaga() {
  yield all([ratesSagas.watch()]);
}

export default { rootSaga };
