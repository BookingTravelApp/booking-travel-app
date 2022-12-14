import axios from 'axios';
import queryString from 'query-string';
import { API_URL, LOCAL_STORAGE_ACCESS_TOKEN_NAME } from '../contexts/constants';

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${localStorage[LOCAL_STORAGE_ACCESS_TOKEN_NAME]}`,
  },
  paramsSerializer: params => queryString.stringify(params),
});

export default axiosClient;
