const TOKEN_KEY = "tokenn";

export const setAccessToken = (s) => {
  localStorage.setItem(TOKEN_KEY, s);
};

export const getAccessToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};
