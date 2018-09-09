import { all } from 'redux-saga/effects';

import { ratesSagas } from '../rates';
import { historySagas } from '../history';

function* rootSaga() {
  yield all([ratesSagas.watch(), historySagas.watch()]);
}

export default { rootSaga };
