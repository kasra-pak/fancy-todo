const loadState = (key) => {
  let state;
  const stringState = localStorage.getItem(key);

  try {
    state = JSON.parse(stringState);
    if (state === null) return undefined;
    return state;

  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const saveState = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
};

export { loadState, saveState };