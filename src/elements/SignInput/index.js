import React from 'react';

import Input from 'elements/Input';

import { propTypes } from './props';

class SignInput extends React.PureComponent {
  static propTypes = propTypes;

  onChange = newValue => {
    const { onChange, sign } = this.props;
    onChange && onChange(newValue.replace(sign, ''));
  };

  render() {
    const props = this.props;
    const { value, sign } = props;
    const displayValue = value ? `${sign}${value}` : value;

    return <Input {...props} value={displayValue} onChange={this.onChange} />;
  }
}

export default SignInput;
