import PropTypes from 'prop-types';

export default PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.array,
  PropTypes.object,
  PropTypes.func
]);
