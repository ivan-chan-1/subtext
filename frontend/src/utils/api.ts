import config from "../config.json";
import { getToken } from "./helpers";

interface RequestOptions {
  method: string;
  headers: Record<string, string>;
  body?: string;
}

export const createRequest = async (url: string, type: string, body?: Record<string, unknown>) => {
  const token = await getToken();
  const options: RequestOptions = {
    method: type,
    headers : {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  }

  if (body !== undefined) {
    options.body = JSON.stringify(body);
  }
  return fetch(`${config.url}:${config.port}/${url}`, options)
  .then((response) => response.json())
}

export const get = (url: string, body?: Record<string, unknown>) => createRequest(url, "GET", body);

export const post = (url: string, body?: Record<string, unknown>) => createRequest(url, "POST", body);

export const put = (url: string, body?: Record<string, unknown>) => createRequest(url, "PUT", body);

export const del = (url: string, body?: Record<string, unknown>) => createRequest(url, "DELETE", body);