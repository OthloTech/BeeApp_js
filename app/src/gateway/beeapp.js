import axios from 'axios';
import { stringify } from 'qs';

const ENTRY_POINT = '/api';

export const get = (path) => (params = {}) =>
  axios.get(`${ENTRY_POINT}/${path}?${stringify(params)}`);

export const post = (path) => (params = {}) => {
  // const token = document.head.querySelector('meta[name="csrf-token"]').content;
  const token = 'aaa';
  return axios.post(`${ENTRY_POINT}/${path}`, params, {
  	headers: { 'X-CSRF-Token': token }
  })
}

export const put = (path) => (params = {}) => {
  // const token = document.head.querySelector('meta[name="csrf-token"]').content;
  const token = 'aaa';
  return axios.put(`${ENTRY_POINT}/${path}`, params, {
  	headers: { 'X-CSRF-Token': token }
  })
}
