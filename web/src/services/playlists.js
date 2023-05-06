import http from './base-api';

const list = () => http.get('/playlists')
  .then((res) => res.data)

const detail = (id) => http.get(`/playlists/${id}`)
  .then((res) => {
    return res
  })

const create = (playlist) => http.post('/playlists', playlist)
  .then((res) => res.id)

const deletePlaylist = (id) => http.delete(`/playlists/${id}`)
  .then((res) => res)

export default {
  list,
  detail,
  create,
  deletePlaylist
};