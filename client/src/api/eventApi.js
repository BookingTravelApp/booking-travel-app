import axiosClient from './axiosClient'
import {url} from './constants'

const eventApi = {
    getAll: (params) => {
        const requestUrl = url + `/event`;
        return axiosClient.get(requestUrl, { params });
    },
    get: (id) => {
        const requestUrl = url + `/event/${id}`;
        return axiosClient.get(requestUrl, id);
    },
}

export default eventApi;