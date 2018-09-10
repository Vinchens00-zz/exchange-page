const checkAmount = (value, balance, ignoreBalance = false) => {
  if (!/^([0-9]+|[0-9]+\.[0-9]+)$/.test(value) || !value) {
    return 'Amount is not a valid number';
  } else if (+value === 0) {
    return 'Amount should be greater than 0';
  } else if (value > balance && !ignoreBalance) {
    return "You don't have enough funds";
  }
};

export const validate = (fields, meta) => {
  const balances = meta.balances;
  const { fromAmount, toAmount, fromAsset, toAsset } = fields;

  const result = {
    fromAmount: checkAmount(fromAmount, balances[fromAsset.id]),
    toAmount: checkAmount(toAmount, balances[toAsset.id], true)
  };

  const hasError = Object.values(result).reduce(
    (res, valid) => Boolean(valid) && res,
    true
  );

  return {
    ...result,
    isValid: !hasError && fields.fromAsset.id !== fields.toAsset.id
  };
};

export const mask = (value = '') => {
  return value
    .replace(/[^0-9.]/g, '')
    .replace(/^0*([+-]{0,1}[0-9]+.{0,1}[0-9]{0,2})[0-9]*$/, '$1');
};
