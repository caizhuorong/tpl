import fetch from 'dva/fetch';
import qs from 'qs';
import {message } from 'antd';
import { Link } from 'dva/router';

fetch.defaults.baseURL = 'http://192.168.0.164:2002';//萌萌

fetch.interceptors.request.use(
    config => {
        let authToken = window.sessionStorage.getItem('token');
        if (authToken) {
            config.headers.token = authToken;
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
);


function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default class request {
   static get(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
  static post(url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url+'?= '+new Date().getTime()+'', qs.stringify(params), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
      ).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}


