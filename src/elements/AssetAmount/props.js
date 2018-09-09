import PropTypes from 'prop-types';

export const propTypes = {
  className: PropTypes.string,
  assetId: PropTypes.string,
  amount: PropTypes.string,
  sign: PropTypes.string,
  assetSignClassName: PropTypes.string
};

export const defaultProps = {
  sign: ''
};
