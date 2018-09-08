import { ASSETS } from 'constants/assets';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ratesSelectors, ratesActions } from 'ducks/rates';

import Component from '../Component';

import { propTypes } from './props';

// const POLL_TIMEOUT = 120 * 1000;
const PRECISION = 8;

const pow = Math.pow(10, PRECISION);
const floor = value => Math.floor(value * pow) / pow;

class Container extends React.Component {
  static propTypes = propTypes;

  static getDerivedStateFromProps(props, state) {
    const { fromAsset, toAsset } = state;
    const { rates } = props;

    const price = floor(rates[fromAsset] / rates[toAsset]);
    const revertPrice = floor(1 / price);

    return {
      price,
      revertPrice
    };
  }

  state = {
    fromAmount: '',
    toAmount: '',
    fromAsset: ASSETS.USD,
    toAsset: ASSETS.EUR,

    focusedInput: 'fromAmount',

    price: 0,
    revertPrice: 0
  };

  componentDidMount() {
    // const { fetch, update } = this.props;
    // fetch(); // TODO uncomment this later, when we'll have info to debug
    //this.timer = setInterval(fetch, POLL_TIMEOUT);
  }

  componentWillUnmount() {
    //clearInterval(this.timer);
  }

  componentDidUpdate(prevProps) {
    const props = this.props;
    const { rates } = props;
    const { rates: prevRates } = prevProps;
    const { fromAsset, toAsset, fromAmount, toAmount } = this.state;

    const isFromFocused = this.state.focusedInput === 'fromAmount';

    if (
      rates[fromAsset] !== prevRates[fromAsset] ||
      rates[toAsset] !== prevRates[toAsset]
    ) {
      if (isFromFocused && fromAmount.length) {
        this.onFromAmountChange(fromAmount);
      } else if (toAmount.length) {
        this.onToAmountChange(toAmount);
      }
    }
  }

  onFromAmountChange = fromAmount => {
    const { price } = this.state;
    const toAmount = floor(price * fromAmount);

    this.setState({
      fromAmount,
      toAmount: isNaN(toAmount) ? this.state.toAmount : toAmount
    });
  };

  onToAmountChange = toAmount => {
    const { revertPrice } = this.state;
    const fromAmount = floor(revertPrice * toAmount);

    this.setState({
      toAmount,
      fromAmount: isNaN(fromAmount) ? this.state.fromAmount : fromAmount
    });
  };

  onInputChange = name =>
    name === 'fromAmount' ? this.onFromAmountChange : this.onToAmountChange;

  onInputFocus = name => () => {
    this.setState({ focusedInput: name });
  };

  onSubmitExchange = () => {};

  render() {
    return (
      <Component
        onInputChange={this.onInputChange}
        fields={this.state}
        onInputFocus={this.onInputFocus}
        onSubmitExchange={this.onSubmitExchange}
      />
    );
  }
}

export default connect(
  state => ({
    base: ratesSelectors.base(state),
    rates: ratesSelectors.rates(state)
  }),
  dispatch => ({
    fetch: bindActionCreators(ratesActions.fetch, dispatch),
    update: bindActionCreators(ratesActions.update, dispatch)
  })
)(Container);
