export const setLocalItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalItem = (key: string) => {
  return localStorage.getItem(key);
};

export const removeLocalItem = (key: string) => {
  localStorage.removeItem(key);
};
