import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from 'pages/App';

import store from './store';
import './resources';

const APP_DIV_ID = 'app';

renderApp();

function renderApp() {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(APP_DIV_ID)
  );
}
