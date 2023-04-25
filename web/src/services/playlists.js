import http from './base-api';

const list = () => http.get('/playlists')
  .then((res) => res.data)

export default {
  list,
};