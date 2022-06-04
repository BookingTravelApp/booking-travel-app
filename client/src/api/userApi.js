import axiosClient from './axiosClient'
import {url} from './constants'

const userApi = {
    getAll: (params) => {
        const requestUrl = url + `/user`;
        return axiosClient.get(requestUrl, { params });
    },
    get: (id) => {
        const requestUrl = url + `/user/${id}`;
        return axiosClient.get(requestUrl, id);
    },
    getUserList: (id) => {
        const requestUrl = url + `/user/get-user`;
        return axiosClient.get(requestUrl);
    },
    getEmployeeList: () => {
        const requestUrl = url + `/user/get-staff`;
        return axiosClient.get(requestUrl);
    }
}

export default userApi;