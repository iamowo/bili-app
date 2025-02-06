import axios from "axios";

const baseUrl = "http://127.0.0.1:8082";

const http = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

// request拦截器
// 请求发送之前在对请求做一些处理
http.interceptors.request.use(
  (config) => {
    const localinfo = JSON.parse(localStorage.getItem("userinfo"));
    // 如果不是登录，注册接口，要带上token
    if (
      localinfo != null &&
      config.url !== "/user/login" &&
      config.url !== "/user/register" &&
      config.url !== "/video/getAllVideo" &&
      config.url !== "/video/getRandom" &&
      !config.url.includes("/video/getByVid") &&
      !config.url.includes("/comment/getAllComment")
    ) {
      config.headers.token = localinfo.token;
    }
    return config; // 返回这个配置对象，如果没有返回，这个请求就不会发送出去
  },
  (error) => {
    return Promise.reject(error);
  }
);

// config.headers['Content-Type'] = 'application/json;charset=utf-8'
// // console.log('设置了请求头2: ' + JSON.parse(localStorage.getItem('userStore')).userData.token);
// let userdata = localStorage.getItem('userStore') ? JSON.parse(localStorage.getItem('userStore')) : null

// if (userdata.userData.token) {
//   config.headers['token'] = userdata.userData.token; // 设置请求头
// }

// return config
// }, error => {
//   return Promise.reject(error)
// }

// response拦截器
http.interceptors.response.use(
  (response) => {
    let code = response.data.code;
    if (code === 200) {
      return response.data.data;
    } else if (code === 401) {
      //token 失效， 需要重新登录
    } else {
      return response.data;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
