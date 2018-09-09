import { ASSETS } from 'constants/assets';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';

import { ratesSelectors, ratesActions } from 'ducks/rates';
import { historyActions } from 'ducks/history';
import { floor } from 'utils/math';

import Component from '../Component';

import { propTypes } from './props';

//const POLL_TIMEOUT = 10 * 1000;
const PRECISION = 2;

class Container extends React.Component {
  static propTypes = propTypes;

  static getDerivedStateFromProps(props, state) {
    const { assets } = props;
    const { fromAsset, toAsset } = state;

    if (assets.includes(fromAsset) && assets.includes(toAsset)) {
      return null;
    }

    return {
      fromAsset: assets.find(
        asset => asset.id === get(fromAsset, 'id', ASSETS.USD)
      ),
      toAsset: assets.find(asset => asset.id === get(toAsset, 'id', ASSETS.EUR))
    };
  }

  state = {
    fromAmount: '',
    toAmount: '',
    fromAsset: {
      id: ASSETS.USD
    },
    toAsset: {
      id: ASSETS.EUR
    },

    focusedInput: 'fromAmount'
  };

  componentDidMount() {
    const { fetchRates } = this.props;
    fetchRates(); // TODO uncomment this later, when we'll have info to debug
    // this.timer = setInterval(fetchRates, POLL_TIMEOUT);
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
    const priceWasChanged =
      rates[fromAsset.id][toAsset.id] !== prevRates[fromAsset.id][toAsset.id];

    if (priceWasChanged) {
      if (isFromFocused && fromAmount.length) {
        this.onFromAmountChange(fromAmount);
      } else if (toAmount.length) {
        this.onToAmountChange(toAmount);
      }
    }
  }

  onFromAmountChange = fromAmount => {
    const { fromAsset, toAsset } = this.state;
    const { rates } = this.props;

    const price = rates[fromAsset.id][toAsset.id];
    const toAmount = floor(price * fromAmount, PRECISION);

    this.setState({
      fromAmount,
      toAmount: isNaN(toAmount) ? this.state.toAmount : String(toAmount)
    });
  };

  onToAmountChange = toAmount => {
    const { fromAsset, toAsset } = this.state;
    const { rates } = this.props;

    const price = rates[toAsset.id][fromAsset.id];

    const fromAmount = floor(price * toAmount, PRECISION);

    this.setState({
      toAmount,
      fromAmount: isNaN(fromAmount) ? this.state.fromAmount : String(fromAmount)
    });
  };

  onInputChange = name =>
    name === 'fromAmount' ? this.onFromAmountChange : this.onToAmountChange;

  onInputFocus = name => () => {
    this.setState({ focusedInput: name });
  };

  onSubmitExchange = () => {
    const { createOperation } = this.props;
    const { fromAmount, toAmount, fromAsset, toAsset } = this.state;

    createOperation({
      fromAmount,
      toAmount,
      fromAsset: fromAsset.id,
      toAsset: toAsset.id
    });

    this.setState({
      fromAmount: '',
      toAmount: '',
      fromAsset,
      toAsset
    });
  };

  onFromAssetChanged = fromAsset => {
    this.setState(
      {
        fromAsset
      },
      () => {
        this.onFromAmountChange(this.state.fromAmount);
      }
    );
  };

  onToAssetChanged = toAsset => {
    this.setState(
      {
        toAsset: toAsset
      },
      () => {
        this.onToAmountChange(this.state.toAmount);
      }
    );
  };

  onAssetChange = name => {
    return name === 'fromAsset'
      ? this.onFromAssetChanged
      : this.onToAssetChanged;
  };

  render() {
    const { assets, rates } = this.props;
    const fields = this.state;

    return (
      <Component
        onInputChange={this.onInputChange}
        fields={this.state}
        data={{
          assets,
          rate: rates[fields.fromAsset.id][fields.toAsset.id]
        }}
        onInputFocus={this.onInputFocus}
        onSubmitExchange={this.onSubmitExchange}
        onAssetChange={this.onAssetChange}
      />
    );
  }
}

export default connect(
  state => ({
    rates: ratesSelectors.rates(state),
    assets: ratesSelectors.assetsWithPrice(state)
  }),
  dispatch => ({
    fetchRates: bindActionCreators(ratesActions.fetch, dispatch),
    createOperation: bindActionCreators(historyActions.create, dispatch)
  })
)(Container);
