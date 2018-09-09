import PropTypes from 'prop-types';

const Asset = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  rates: PropTypes.object
});

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
