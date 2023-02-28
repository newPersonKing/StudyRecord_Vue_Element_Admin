import axios from 'axios'

// 设置baseUrl
axios.defaults.baseURL = '/vue'

axios.defaults.timeout = 10000

// todo 这里也要设置
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// //请求拦截
// axios.interceptors.request.use(
//   config => {
//     // 每次发送请求之前判断vuex中是否存在token
//     // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
//     // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
//     // const token = store.state.token;
//     // token && (config.headers.Authorization = token);
//     return config;
//   },
//   error => {
//     return Promise.error(error);
//   })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    console.log(`error=intercept==${error.toString()}`)
  })

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params || {}
    }).then(res => {
      const status = res.data['status']
      if (status === 200) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }).catch(err => {
      console.log(`get_error_${err}`)
      reject(err.data)
    })
  })
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        const status = res.data['status']
        if (status === 200) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
