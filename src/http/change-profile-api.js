import axios from 'axios';
import store from "../redux/reducer";
import {setProfile} from "../redux/reducers/auth";


const api = axios.create({
    baseURL: 'http://137.184.105.158/api/v1'
});


api.interceptors.request.use(function (config) {
    console.log(config)
    store.dispatch(setProfile(config.data));
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


export default api;