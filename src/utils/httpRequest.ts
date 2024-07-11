/**
 * A utility function for making HTTP requests with Axios.
 * It includes an interceptor to automatically add JWT token to the request header.
 *
 * @param {AxiosRequestConfig} config - The Axios request configuration object.
 * @returns {Promise<any>} - A Promise that resolves to the Axios response.
 */
import axios from "axios";
import { getLocalItem } from "./localStorageFunctions";

const httpRequest = axios.create();

httpRequest.interceptors.request.use(
  (config) => {
    // If the auth parameter is not set to false, include the JWT token in the header
    if (config.params?.auth !== false) {
      const token = getLocalItem("meducate-token");
      // const token = "Your JWT token here!";
      if (token) {
        config.headers["auth-token"] = token;
      }
    }

    // Remove the auth parameter from the config so it's not sent in the request
    delete config.params?.auth;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpRequest;
