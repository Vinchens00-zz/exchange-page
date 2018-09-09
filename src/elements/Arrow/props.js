import PropTypes from 'prop-types';

export const propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  mod: PropTypes.oneOf(['left', 'right'])
};
