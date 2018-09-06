import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer, { rootSagas } from 'ducks/root';

const sagaMiddleware = createSagaMiddleware({
  // eslint-disable-next-line
  onError: error => console.log(error)
});

export function configureStore(initialState = {}) {
  const createStoreResult = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSagas.rootSaga);

  return createStoreResult;
}

const store = configureStore();

export default store;
