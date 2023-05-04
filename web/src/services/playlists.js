import http from './base-api';

const list = () => http.get('/playlists')
  .then((res) => res.data)

const detail = (id) => http.get(`/playlists/${id}`)
  .then((res) => res)

const create = () => http.post('/playlists')
  .then((res) => res.data)

export default {
  list,
  detail,
  create
};