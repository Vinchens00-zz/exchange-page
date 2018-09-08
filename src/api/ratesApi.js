import { RATE_URL } from 'constants/rateUrl';

import { fromApi } from 'formatters/rates';
import makeHTTPRequest from 'utils/makeHTTPRequest';

export const getRates = async () => {
  const data = await makeHTTPRequest(RATE_URL);
  return fromApi(data);
};
