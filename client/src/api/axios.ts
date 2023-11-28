import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

import { getDataFromLocalStorage } from "../shared/utils/localStorage";

const BASE_URL = "http://localhost:3000/api/v1/";

export interface ApiResponse<T = any> {
  data?: T;
  error? : ApiError;
  success? :boolean
}
export interface ApiError {
  status?: number;
  code?: string;
  error?: any;
}
export default class Api {
  private static _axios: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    responseType: "json",
  });

  static get Instance() {
    return this._axios;
  }

  static init(errorHandler?: (error: any) => void) {
    this._axios.interceptors.request.use(async (config) => {
      const accessToken = getDataFromLocalStorage("authorization");
      if (accessToken && config.headers) {
        config.headers["authorization"] = accessToken;
      }
      return config;
    });
    this._axios.interceptors.response.use(
      (response: AxiosResponse<any, any>) => response,
      (error: AxiosError) => {
        console.error(error,'error')
        const apiError: ApiError = {
          status: error.response?.status,
          code: error.code,
          error: error?.response?.data,
        };
        errorHandler && errorHandler(error);
        return Promise.resolve({ data: undefined, error: apiError });
      }
    );
  }
}
