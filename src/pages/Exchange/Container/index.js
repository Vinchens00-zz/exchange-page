import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ratesSelectors, ratesActions } from 'ducks/rates';

import { propTypes } from './props';

const POLL_TIMEOUT = 120 * 1000;

class Container extends React.Component {
  static propTypes = propTypes;

  componentDidMount() {
    const { fetch } = this.props;
    // fetch(); // TODO uncomment this later, when we'll have info to debug
    this.timer = setInterval(fetch, POLL_TIMEOUT);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return 'Exchange component will be here';
  }
}

export default connect(
  state => ({
    base: ratesSelectors.base(state),
    rates: ratesSelectors.rates(state)
  }),
  dispatch => ({
    fetch: bindActionCreators(ratesActions.fetch, dispatch)
  })
)(Container);
