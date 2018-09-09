import { createAction } from 'redux-act';

const CREATE = 'app/history/CREATE';
const LOAD = 'app/history/LOAD';
const LOAD_SUCCESS = 'app/history/LOAD_SUCCESS';

const create = createAction(CREATE);
const load = createAction(LOAD);
const loadSuccess = createAction(LOAD_SUCCESS);

export default {
  load,
  create,
  loadSuccess
};
