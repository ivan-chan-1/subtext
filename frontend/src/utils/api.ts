import config from "../config.json";

export const createRequest = async (url: string, type: string, body) => {
  const options = {
    method: type,
    headers : {
      'Content-type': 'application/json',
    },
  }

  if (body !== undefined) {
    options.body = JSON.stringify(body);
  }
  return fetch(`${config.url}:${config.port}/${url}`, options)
  .then((response) => response.json())
}

export const get = (url: string, body) => createRequest(url, "GET", body);

export const post = (url: string, body) => createRequest(url, "POST", body);

export const put = (url: string, body) => createRequest(url, "PUT", body);

export const del = (url: string, body) => createRequest(url, "DELETE", body);