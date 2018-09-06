const PREFIX = 'ui';

class LocalStorage {
  constructor() {
    this._storage = window.localStorage;
  }

  get(key) {
    return JSON.parse(this._storage.getItem(this._getKey(key)));
  }

  set(key, value) {
    this._storage.setItem(this._getKey(key), JSON.stringify(value));
  }

  remove(key) {
    this._storage.removeItem(this._getKey(key));
  }

  _getKey(key) {
    return `${PREFIX}:${key}`;
  }
}

const localStorage = new LocalStorage();

export default localStorage;
