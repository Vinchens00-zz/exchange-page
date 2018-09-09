import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Exchange from 'pages/Exchange';
import { historyActions } from 'ducks/history';

import { propTypes } from './props';

class MainPage extends React.Component {
  static propTypes = propTypes;

  componentDidMount() {
    const { loadHistory } = this.props;
    loadHistory();
  }

  render() {
    return <Exchange />;
  }
}

export default connect(null, dispatch => ({
  loadHistory: bindActionCreators(historyActions.load, dispatch)
}))(MainPage);
