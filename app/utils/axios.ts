import axios from 'axios';
import { useSelector } from 'react-redux';
import { AppConfig } from '~/config';
import { store } from '~/redux/store';
import { refreshTokens } from '~/redux/token';

const axiosInstance = axios.create({
  baseURL: AppConfig.baseUrl,
});

// Shared across concurrent 401s so we only ever refresh once at a time.
let refreshPromise: Promise<any> | null = null;

function refreshOnce() {
  if (!refreshPromise) {
    refreshPromise = store
      .dispatch(refreshTokens())
      .unwrap()
      .finally(() => {
        refreshPromise = null;
      });
  }
  return refreshPromise;
}

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;
    // `_retry` stops a still-401 retry from refreshing and retrying forever.
    if (error.response?.status === 401 && config && !config._retry) {
        config._retry = true;
        let res;
        try {
            res = await refreshOnce();
        } catch {
            return Promise.reject(error);
        }
        if (!res?.access_token) {
            return Promise.reject(error);
        }
        if (config.headers.set) {
          config.headers.set('Authorization', `Bearer ${res.access_token}`);
        } else {
          config.headers['Authorization'] = `Bearer ${res.access_token}`;
        }
        // Retry original request
        return axiosInstance.request(config);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;