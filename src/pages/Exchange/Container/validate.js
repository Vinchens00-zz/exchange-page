export const validate = fields => {
  return {
    isValid: fields.fromAsset.id !== fields.toAsset.id
  };
};
