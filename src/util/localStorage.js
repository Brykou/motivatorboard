const HAS_STORAGE = typeof Storage !== "undefined";

const localStorage = {
  get: (key) => HAS_STORAGE && window.localStorage.getItem(key),
  set: (key, value) => HAS_STORAGE && window.localStorage.setItem(key, value),
};

export default localStorage;
