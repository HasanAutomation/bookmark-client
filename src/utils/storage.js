class Storage {
  setItem(key, value) {
    localStorage.setItem(key, value);
  }
  getItem(key) {
    return localStorage.getItem(key);
  }
  removeItem(key) {
    localStorage.removeItem(key);
  }
}

const instance = new Storage();
export default instance;
