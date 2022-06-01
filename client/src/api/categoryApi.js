import axiosClient from './axiosClient'
import {url} from './constants'

const categoryApi = {
    getAll: (params) => {
        const requestUrl = url + '/category';
        return axiosClient.get(requestUrl, { params });
    },
    get: (id) => {
        const requestUrl = url + `/category/${id}`;
        return axiosClient.get(requestUrl);
    },
    delete: (id) => {
        const requestUrl = url + `/category/${id}`;
        return axiosClient.delete(requestUrl);
    },
    post: (id) => {
        const requestUrl = url + `/category/${id}`;
        return axiosClient.post(requestUrl);
    },
    update: (id, credentials) => {
        const requestUrl = url + `/category/${id}`;
        return axiosClient.put(requestUrl, credentials);
    }
}

export default categoryApi;