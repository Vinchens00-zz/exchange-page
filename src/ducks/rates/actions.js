import { createAction } from 'redux-act';

const FETCH = 'app/rates/FETCH';
const UPDATE = 'app/rates/UPDATE';

const fetch = createAction(FETCH);
const update = createAction(UPDATE);

export default {
  fetch,
  update
};
