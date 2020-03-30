import axios from 'axios'
// 创建axios实例
const service = axios.create({
  baseURL: '链接地址', // 如：http://192.168.31.102:8080 要允许跨域
  timeout: 30000, // 请求超时时间
  withCredentials: true
})

// request拦截器
service.interceptors.request.use(
  config => {
    // config.headers['Appid'] = 'testappid'
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
