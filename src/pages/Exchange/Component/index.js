import React from 'react';

import Input from 'elements/Input';
import cn from 'utils/bem';

import { propTypes } from './props';

const b = cn('exchange');

const Component = ({
  onInputChange,
  onInputFocus,
  fields,
  onSubmitExchange
}) => (
  <div className={b()}>
    Exchange Component:
    <div>Selector 1</div>
    <div>
      <Input
        value={fields.fromAmount}
        onChange={onInputChange('fromAmount')}
        onFocus={onInputFocus('fromAmount')}
      />
    </div>
    <div>
      <Input
        value={fields.toAmount}
        onChange={onInputChange('toAmount')}
        onFocus={onInputFocus('toAmount')}
      />
    </div>
    <div>Selector 2</div>
    <div>
      <button onClick={onSubmitExchange}>Submit</button>
    </div>
  </div>
);

Component.propTypes = propTypes;

export default Component;
