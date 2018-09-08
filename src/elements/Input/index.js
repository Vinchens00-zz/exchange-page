import React from 'react';

import { propTypes } from './props';

class Input extends React.PureComponent {
  static propTypes = propTypes;

  onChange = e => {
    const { onChange } = this.props;
    onChange && onChange(e.target.value);
  };

  render() {
    const { placeholder, value, onFocus } = this.props;

    return (
      <input
        onChange={this.onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        value={value}
      />
    );
  }
}

export default Input;
