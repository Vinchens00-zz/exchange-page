import React from 'react';
import { isFunction, omit } from 'lodash';

import cn from 'utils/bem';

import { propTypes } from './props';
import './style.styl';

const b = cn('input');

class Input extends React.PureComponent {
  static propTypes = propTypes;

  state = {
    focus: false,
    changed: false
  };

  onChange = e => {
    const { onChange, mask } = this.props;
    let value = e.target.value;

    if (mask) {
      value = String(isFunction(mask) ? mask(value) : value.replace(mask, ''));
    }

    onChange && onChange(value);
    this.setState({ changed: true });
  };

  onFocus = () => {
    this.setState({ focus: true });
  };

  onBlur = () => {
    this.setState({ focus: false });
  };

  render() {
    const { error, className, mods, ...props } = this.props;
    const { changed, focus } = this.state;
    const dirty = Boolean(props.value);
    const showError = error && ((focus && changed) || (dirty && !focus));
    const inputProps = omit(props, ['mask']);

    return (
      <div className={b(null, null, className)}>
        <input
          {...inputProps}
          onChange={this.onChange}
          className={b('input', mods)}
        />
        {showError && <span className={b('error')}>{error}</span>}
      </div>
    );
  }
}

export default Input;
