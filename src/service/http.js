import axios from "axios";
import { API_URL } from "config/constant";
import SnackbarUtils from "utils/SnackbarUtils";
class Http {
    constructor() {
        const service = axios.create({
            baseURL: API_URL,
            headers: {
                common: {
                    Accept: "application/json",
                },
            },
        });
        service.interceptors.request.use(
            async (config) => {
                const user = JSON.parse(localStorage.getItem("user"));
                if (user !== null && user.token && user.token.token) {
                    const currentTime = Math.floor(Date.now() / 1000);
                    if (currentTime > user.tokenLife + user.token.expire) {
                        // try {
                        //     const { data } = await axios.post(`${API_URL}/auth/refresh-token`, {
                        //         refreshToken: user.refreshToken.token,
                        //     });
                        //     //   setUser({
                        //     //    ...user,
                        //     //    token: data.accessToken,
                        //     //    tokenLife: Math.floor(Date.now() / 1000),
                        //     //    expire: data.expiresIn,
                        //     //    refreshToken: data.refreshToken,
                        //     //   });
                        //     //    console.log('Using the new token');
                        //     //    console.log(data.accessToken);
                        //     config.headers.common.Authorization = `Bearer ${data.accessToken}`;
                        // } catch (error) {
                        //     localStorage.removeItem('user');
                        //     window.location.href = '/';
                        // }
                    } else {
                        config.headers.Authorization = `Bearer ${user.token.token}`;
                    }
                }

                if (["/users/upload", "/users"].includes(config.url)) {
                    config.headers.post["Content-Type"] = "multipart/form-data";
                }
                return config;
            },
            (error) => Promise.reject(error)
        );
        service.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error?.response?.data?.message) {
                    SnackbarUtils.error(error?.response?.data?.message);
                } else {
                    SnackbarUtils.error("Something went wrong in sever call");
                }
                return error;
            }
        );
        this.service = service;

        const fetch = axios.create({
            baseURL: API_URL,
            headers: {
                common: {
                    Accept: "application/json",
                },
            },
        });
        fetch.interceptors.response.use(
            (response) => response?.data,
            (error) => Promise.reject(error?.response.data)
        );
        this.fetch = fetch;
    }
    get(path) {
        return this.service.get(path);
    }
    post(path, payload) {
        return this.service.post(path, payload);
    }
    put(path, payload) {
        return this.service.put(path, payload);
    }
    delete(path, payload) {
        return this.service.delete(path, payload);
    }
}
export default new Http();
