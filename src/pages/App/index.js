import React from 'react';
import { hot } from 'react-hot-loader';

import MainPage from 'pages/Main';

class App extends React.Component {
  render() {
    return (
      <main>
        <MainPage />
      </main>
    );
  }
}

export default hot(module)(App);
