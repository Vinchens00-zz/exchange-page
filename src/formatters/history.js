import uuid from 'uuid/v4';

export const operationToApi = operation => ({
  ...operation,
  date: Date.now(),
  id: uuid(Date.now)
});
