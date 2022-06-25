import axiosClient from "./axiosClient";
import {url} from './constants';

const ServiceApi = {
    getServiceById: (id) => {
        const requestUrl = url + "";
        return axiosClient.get(requestUrl)
    },

    getCarHireList: () => {
        const requestUrl = url + "/service/get-car-rental-list";
        return axiosClient.get(requestUrl)
    },

    getHotelList: () => {
        const requestUrl = url + "/service/get-hotel-list";
        return axiosClient.get(requestUrl)
    },

    getTourList: () => {
        const requestUrl = url + "/service/get-tour-list";
        return axiosClient.get(requestUrl)
    },

    getService: slug => {
        const requestUrl = url + `/service/${slug}`;
        return axiosClient.get(requestUrl);
    }
}

export default ServiceApi;