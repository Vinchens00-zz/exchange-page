import React from 'react';
import { hot } from 'react-hot-loader';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ratesSelectors, ratesActions } from 'ducks/rates';

class App extends React.Component {
  componentDidMount() {
    // this.props.fetch();
  }
  render() {
    return <main>Main Page</main>;
  }
}

const Connected = connect(
  state => ({
    base: ratesSelectors.base(state),
    rates: ratesSelectors.rates(state)
  }),
  dispatch => ({
    fetch: bindActionCreators(ratesActions.fetch, dispatch)
  })
)(App);

export default hot(module)(Connected);
