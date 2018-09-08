import React from 'react';

import { Provider } from 'react-redux';
import { render } from 'react-testing-library';

import { configureStore } from 'src/store';

/**
 *
 * @param {React.Component} component
 * @param {object} initialState
 */
export const renderWithRedux = (component, initialState = {}) => {
  const store = configureStore(initialState);

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
};
