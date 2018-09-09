import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Exchange from 'pages/Exchange';
import HistoryPage from 'pages/History';
import { historyActions } from 'ducks/history';
import cn from 'utils/bem';

import { propTypes } from './props';
import './style.styl';

const b = cn('main-page');

class MainPage extends React.Component {
  static propTypes = propTypes;

  componentDidMount() {
    const { loadHistory } = this.props;
    loadHistory();
  }

  render() {
    return (
      <div className={b()}>
        <div className={b('exchange')}>
          <Exchange />
        </div>
        <div className={b('history')}>
          <HistoryPage />
        </div>
      </div>
    );
  }
}

export default connect(null, dispatch => ({
  loadHistory: bindActionCreators(historyActions.load, dispatch)
}))(MainPage);
