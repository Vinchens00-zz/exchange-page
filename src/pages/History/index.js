import React from 'react';
import { connect } from 'react-redux';

import { historySelectors } from 'ducks/history';
import Operation from 'components/Operation';
import cn from 'utils/bem';

import { propTypes } from './props';
import './style.styl';

const b = cn('history-page');

class HistoryPage extends React.Component {
  static propTypes = propTypes;

  render() {
    const { operations } = this.props;

    return (
      <div className={b()}>
        {operations.length ? (
          operations.map(operation => (
            <Operation
              key={operation.id}
              operation={operation}
              className={b('operation')}
            />
          ))
        ) : (
          <span className={b('empty-message')}>
            There are no exchange history yet.
          </span>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    operations: historySelectors.recentOperations(state)
  }),
  null
)(HistoryPage);
