import http from "./base-api";

const create = (user) => http.post('/register', user)
  .then((res) => res.data)


export default {
  create,
}