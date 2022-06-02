import axiosClient from './axiosClient'
import {url} from './constants'

const billApi = {
    getAll: (params) => {
        const requestUrl = url + '/bill';
        return axiosClient.get(requestUrl, params);
    },
    get: (id) => {
        const requestUrl = url + `/bill/${id}`;
        return axiosClient.get(requestUrl);
    },
    getListBill: () => {
        const requestUrl = url + `/bill/list-bill`;
        return axiosClient.get(requestUrl);
    }
    // confirmBill: (id) => {
    //     const requestUrl = url + `/bill/confirm-id`
    //     return axiosClient.put(requestUrl);
    // },
    // cancelBill: (id) => {
    //     const requestUrl = url + `/bill/cancel-id`
    //     return axiosClient.put(requestUrl);
    // },
    // restoreBill: (id) => {
    //     const requestUrl = url + `/bill/restore-id`
    //     return axiosClient.put(requestUrl);
    // }
}

export default billApi;