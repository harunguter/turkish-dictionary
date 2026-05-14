import axios, { type AxiosRequestHeaders } from "axios";

export interface HttpClient {
  get: <T = unknown>(endpoint: string) => Promise<T>;
  post: <T = unknown, D = unknown>(endpoint: string, data?: D) => Promise<T>;
  put: <T = unknown, D = unknown>(endpoint: string, data?: D) => Promise<T>;
  delete: <T = unknown, D = unknown>(endpoint: string, data?: D) => Promise<T>;
}

export const createHttpClient = (
  baseURL: string,
  headers: Partial<AxiosRequestHeaders> = {}
): HttpClient => {
  const instance = axios.create({ baseURL, headers });

  instance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      const data = error?.response?.data;
      const dataInfo = data != null ? `, data: ${JSON.stringify(data)}` : "";
      console.error(`HTTP error: ${error.message}${dataInfo}`);
      return error.message;
    }
  );

  return {
    get: (endpoint) => instance.get(endpoint),
    post: (endpoint, data) => instance.post(endpoint, data),
    put: (endpoint, data) => instance.put(endpoint, data),
    delete: (endpoint, data) => instance.delete(endpoint, { data })
  };
};
