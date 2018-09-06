import React from 'react';

import { Provider } from 'react-redux';
import { render } from 'react-testing-library';
import { ConnectedRouter } from 'connected-react-router';
import { createMemoryHistory } from 'history';

import { configureStore } from 'src/store';

/**
 *
 * @param {React.Component} component
 * @param {object} initialState
 */
export const renderWithRedux = (component, initialState = {}) => {
  const history = createMemoryHistory();
  const store = configureStore(initialState, history);

  return {
    ...render(
      <Provider store={store}>
        <ConnectedRouter history={history}>{component}</ConnectedRouter>
      </Provider>
    ),
    history,
    store
  };
};
