import axiosClient from './axiosClient';
import { url } from './constants';

const tagApi = {
  showAll: params => {
    const requestUrl = url + `/event`;
    return axiosClient.get(requestUrl, { params });
  },
  create: params => {
    const requestUrl = url + `/event/`;
    return axiosClient.post(requestUrl, params);
  },
  update: params => {
    const requestUrl = url + `/event/`;
    return axiosClient.put(requestUrl, params);
  },
  delete: id => {
    const requestUrl = url + `/event/${id}`;
    return axiosClient.delete(requestUrl);
  },
};

export default tagApi;
