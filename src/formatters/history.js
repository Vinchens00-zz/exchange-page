import uuid from 'uuid/v4';

export const operationToApi = operation => ({
  ...operation,
  date: new Date(),
  id: uuid(Date.now)
});
