import axiosClient from "./axiosClient";
import {url} from './constants';

const ServiceApi = {
    getServiceById: (id) => {
        const requestUrl = url + "";
        return axiosClient.get(requestUrl)
    }
}