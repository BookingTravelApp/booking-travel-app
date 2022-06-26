import axiosClient from './axiosClient';
import { url } from './constants';

const serviceAPI = {
  getAll: params => {
    const requestUrl = url + '/service';
    return axiosClient.get(requestUrl, { params });
  },
  getService: slug => {
    const requestUrl = url + `/service/${slug}`;
    return axiosClient.get(requestUrl);
  },
  get: id => {
    const requestUrl = url + `/service/${id}`;
    return axiosClient.get(requestUrl);
  },
  getTour: slug => {
    const requestUrl = url + `/service/${slug}`;
    return axiosClient.get(requestUrl);
  },
  getTourList: id => {
    const requestUrl = url + `/service/get-tour-list`;
    return axiosClient.get(requestUrl);
  },
  getHotelList: id => {
    const requestUrl = url + `/service/get-hotel-list`;
    return axiosClient.get(requestUrl);
  },
  getCarList: id => {
    const requestUrl = url + `/service/get-car-rental-list`;
    return axiosClient.get(requestUrl);
  },
  getServiceById: id => {
    const requestUrl = url + '';
    return axiosClient.get(requestUrl);
  },

  getCarHireList: () => {
    const requestUrl = url + '/service/get-car-rental-list';
    return axiosClient.get(requestUrl);
  },
  create: params => {
    const requestUrl = url + `/service/`;
    return axiosClient.post(requestUrl, params);
  },
  update: credentials => {
    const requestUrl = url + `/service/`;
    return axiosClient.put(requestUrl, credentials);
  },
  delete: id => {
    const requestUrl = url + `/service/${id}`;
    return axiosClient.delete(requestUrl);
  },
};

export default serviceAPI;
