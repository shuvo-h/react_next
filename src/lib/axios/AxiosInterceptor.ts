
import { getAccessToken } from "@/action/authAction";
import { AUTH_KEY } from "@/constant/authConstatn";
import axios from "axios";

const AxiosInstance = axios.create();
AxiosInstance.defaults.headers.post['Content-Type'] = "application/json";
AxiosInstance.defaults.headers["Accept"] = "application/json";
AxiosInstance.defaults.timeout = 60*1000; // 1min


// request middleware
AxiosInstance.interceptors.request.use(async function (config) {
    // Do something before request is sent
    // add access token here
    const accessToken = await getAccessToken(AUTH_KEY);
    console.log({accessToken,ad:123});
    // refereshToken

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
        // config.headers.Authorization = accessToken;
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });



// response middleware
AxiosInstance.interceptors.response.use(  function (response) {
    return response.data;
  }, async function (error) {
    const config = error.config;

    if (error.response?.status === 401 && !config.sent) {
        config.sent = true;
        // const newToken = await getNewAccessToken(refreshToken);
        // setAccessToken(AUTH_KEY,newToken.accessToken)
        // setAccessToken(AUTH_REFRESH_KEY,newToken.accessToken)
        // config.headers['Authorization'] = newToken.accessToken;
        return AxiosInstance(config)
    }else {
      console.log(error.response)
        // return Promise.reject(error.response);
        return error.response
    }

  });

  export { AxiosInstance}