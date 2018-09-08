import { ASSETS } from 'constants/assets';

export const fromApi = data => ({
  base: data.base,
  rates: Object.values(ASSETS).reduce(
    (rates, asset) => ({ ...rates, [asset]: data.rates[asset] }),
    {}
  )
});
