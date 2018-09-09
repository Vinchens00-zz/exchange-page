import PropTypes from 'prop-types';

import Asset from 'props/Asset';

export const propTypes = {
  className: PropTypes.string,
  assets: PropTypes.arrayOf(Asset),
  selectedAsset: Asset,
  onChange: PropTypes.func
};
