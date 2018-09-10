export const validate = fields => {
  return {
    isValid: fields.fromAsset.id !== fields.toAsset.id
  };
};

export const mask = (value = '') => {
  return value
    .replace(/[^0-9.]/g, '')
    .replace(/^0*([+-]{0,1}[0-9]+.{0,1}[0-9]{0,2})[0-9]*$/, '$1');
};
