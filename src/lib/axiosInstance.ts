import { AUTH_KEY, AUTH_REFRESH_KEY } from "@/constant/authConst";
import { getAccessToken, setAccessToken } from "@/service/actions/cookies";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60*1000; // 1min


// request middleware
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // add access token here
    const accessToken = getAccessToken(AUTH_KEY);
    console.log({accessToken});

    if (accessToken) {
        config.headers.Authorization = accessToken;
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


// response middleware
axios.interceptors.response.use(function (response) {
    return response.data;
  }, async function (error) {
    const config = error.config;

    if (error.response?.status === 401 && !config.sent) {
        config.sent = true;
        // const newToken = await getNewAccessToken();
        // setAccessToken(AUTH_KEY,newToken.accessToken)
        // setAccessToken(AUTH_REFRESH_KEY,newToken.accessToken)
        // config.headers['Authorization'] = newToken.accessToken;
        return instance(config)
    }else {

        return Promise.reject(error);
    }

  });

  export { instance}