import PropTypes from 'prop-types';

export default PropTypes.shape({
  fromAsset: PropTypes.string,
  toAsset: PropTypes.string,
  fromAmount: PropTypes.string,
  toAmount: PropTypes.string,
  date: PropTypes.date
});
