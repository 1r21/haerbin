import axios from "axios";
const { REACT_APP_API_URL } = process.env;
axios.defaults.baseURL = REACT_APP_API_URL + '/api';
// axios.defaults.headers.common['X-Token'] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] = "application/json";

// Add a request interceptor
axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Add a response interceptor
axios.interceptors.response.use((response) => {
  const { status, data: res } = response;
  if (status === 200) {
    const { code, message, data } = res;
    if (code === 0) {
      return data;
    }
    return Promise.reject(message);
  }
  return Promise.reject("error");
});

export default axios;
