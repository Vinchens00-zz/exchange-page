import React from 'react';
import { isFunction, omit } from 'lodash';

import { propTypes } from './props';

class Input extends React.PureComponent {
  static propTypes = propTypes;

  onChange = e => {
    const { onChange, mask } = this.props;
    let value = e.target.value;

    if (mask) {
      value = String(isFunction(mask) ? mask(value) : value.replace(mask, ''));
    }

    onChange && onChange(value);
  };

  render() {
    const props = omit(this.props, ['mask']);

    return <input {...props} onChange={this.onChange} />;
  }
}

export default Input;
