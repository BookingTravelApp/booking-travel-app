import axiosClient from "./axiosClient";
import { url } from "./constants";

const CartApi = {

    getAll : () => {
        const requestUrl = url + "/user/cart";
        return axiosClient.get(requestUrl);
    },


}

export default CartApi;