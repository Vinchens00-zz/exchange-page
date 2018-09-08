import PropTypes from 'prop-types';

export const propTypes = {
  onInputChange: PropTypes.func,
  onInputFocus: PropTypes.func,
  fields: PropTypes.shape({
    fromAmount: PropTypes.string,
    toAmount: PropTypes.string,
    fromAsset: PropTypes.string,
    toAsset: PropTypes.string,
    price: PropTypes.number,
    revertPrice: PropTypes.number
  })
};
