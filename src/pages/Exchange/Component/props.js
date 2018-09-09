import PropTypes from 'prop-types';

import Asset from 'props/Asset';

export const propTypes = {
  onInputChange: PropTypes.func,
  onInputFocus: PropTypes.func,
  onSubmitExchange: PropTypes.func,
  onAssetChange: PropTypes.func,

  fields: PropTypes.shape({
    fromAmount: PropTypes.string,
    toAmount: PropTypes.string,
    fromAsset: Asset,
    toAsset: Asset
  })
};
