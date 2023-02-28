import axios from 'axios'
// import { API_HOST } from './index'
import { serverConfig } from './index'

console.log('API : ', serverConfig.API)

axios.defaults.baseURL = serverConfig.API

axios.interceptors.request.use(config => {
  const conf = config
  conf.headers['Content-Type'] = 'application/json'
  if (localStorage.getItem('accessToken'))
    conf.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
  conf.headers['Request-Token'] = serverConfig.requestToken

  return conf
})

export const deleteRequest = (path, body = {}) =>
  fetch(`${serverConfig.API}${path}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Request-Token': serverConfig.requestToken
    },
    body: JSON.stringify(body),
  }).then(res => ({ data: res }))

export const getRequest = (path, params = {}) =>
  fetch(`${serverConfig.API}${path}${paramsToQueryString(params)}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Request-Token': serverConfig.requestToken
    },
  }).then(res => ({ data: res.json() }))

const paramsToQueryString = params => {
  const keys = Object.keys(params)
  if (!keys.length) return ''

  return keys
    .map((key, index) => {
      const delimiter = index === 0 ? '?' : '&'
      return `${delimiter}${key}=${params[key]}`
    })
    .join('')
}
