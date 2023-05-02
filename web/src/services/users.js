import http from "./base-api";

const create = (user) => http.post('/register', user)
  .then((res) => res.data)

const login = (user) => http.post('/login', user)
  .then((res) => res.data);

const get = (id) => http.get(`/users/${id}`)
  .then((res) => { 
    console.log(res)
     return res.data
    });

export default {
  create,
  login,
  get
}