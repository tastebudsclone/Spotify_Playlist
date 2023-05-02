import http from './base-api';

const list = () => http.get('/playlists')
  .then((res) => res.data)

const detail = (id) => http.get(`/playlists/${id}`)
  .then((res) => res)

export default {
  list,
  detail
};