import axiosClient from './axiosClient';
import { url } from './constants';

const serviceAPI = {
  getAll: params => {
    const requestUrl = url + '/service';
    return axiosClient.get(requestUrl, { params });
  },
  get: id => {
    const requestUrl = url + `/service/${id}`;
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
  update: (id, credentials) => {
    const requestUrl = url + `/service/${id}`;
    return axiosClient.patch(requestUrl, credentials);
  },
  delete: id => {
    const requestUrl = url + `/service/${id}`;
    return axiosClient.delete(requestUrl);
  },
};

export default serviceAPI;
