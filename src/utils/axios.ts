import axios from 'axios'
import qs from 'qs'

export const axiosGet = (
  url: string,
  params?: { [key: string]: any },
  headers?: { [key: string]: any }
) => {
  const realUrl = params ? `${url}?${qs.stringify(params)}` : url
  return axios.get(realUrl, { headers })
}

export const axiosPost = (
  url: string,
  params?: { [key: string]: any },
  headers?: { [key: string]: any }
) => {
  return axios.post(url, params || {}, { headers })
}
