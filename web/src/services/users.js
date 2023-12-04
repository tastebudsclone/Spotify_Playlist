import http from "./base-api";

const create = (user) => http.post('/register', user)
  .then((res) => res.data).catch((error) => console.error(error))

const login = (user) => http.post('/login', user)
  .then((res) => res.data);

const get = (id) => http.get(`/users/${id}`)
  .then((res) => { 
     return res.data
    });

const like = (id) => http.post(`/playlists/${id}/like`)
    .then((res) => {
      return res.data
    });

const dislike = (id) => http.delete(`/playlists/${id}/like`)
    .then((res) => res.data)

export default {
  create,
  login,
  get,
  like,
  dislike
}