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

}

export default categoryApi;