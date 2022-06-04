import axiosClient from './axiosClient'
import {url} from './constants'

const employeeApi = {
    getAll: (params) => {
        const requestUrl = url + `/user/get-staff/`;
        return axiosClient.get(requestUrl, params);
    },
    get: (id) => {
        const requestUrl = url + `/user/get-staff/${id}`;
        return axiosClient.get(requestUrl);
    },

}

export default employeeApi;