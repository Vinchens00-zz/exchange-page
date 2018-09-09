import PropTypes from 'prop-types';

const Asset = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  rates: PropTypes.object
});

export default Asset;
