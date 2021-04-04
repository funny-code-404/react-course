export const baseUrl = "https://age-of-empires-2-api.herokuapp.com/api/v1";

export const getFormatedPath = (path) =>
  path.replace(baseUrl, "").toLowerCase();

export const getFormatedName = (path) => {
  const splitedPath = path.split("/");

  return splitedPath[splitedPath.length - 1].replace("_", " ");
};

export const defaultConfig = {
  headers: {
    Accept: "application/json",
  },
};

export const API = {
  request(url, config = {}) {
    return fetch(url, {
      ...defaultConfig,
      config,
    });
  },
  get(path) {
    return this.request(path);
  },
};
