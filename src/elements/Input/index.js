import React from 'react';

import { propTypes } from './props';

class Input extends React.PureComponent {
  static propTypes = propTypes;

  onChange = e => {
    const { onChange } = this.props;
    onChange && onChange(e.target.value);
  };

  render() {
    const props = this.props;

    return <input {...props} onChange={this.onChange} />;
  }
}

export default Input;
