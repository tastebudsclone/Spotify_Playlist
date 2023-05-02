const express = require('express');
const router = express.Router();
const users = require('../controllers/users.controller');
const common = require('../controllers/common.controller');
const playlists = require('../controllers/playlists.controller');

const secure = require('../middlewares/secure.mid');
const usersMid = require('../middlewares/users.mid');

router.post('/login', users.login);
router.post('/register', users.create);
router.get('/users/:id', secure.auth ,usersMid.exist, users.profile);
router.patch('/users/:id', secure.auth, users.settings);

router.get('/playlists', playlists.list);
router.get('/playlists/:id', playlists.detail);
router.post('/playlists', secure.auth, playlists.create);
router.delete('/playlists/:id', secure.auth, playlists.delete);
router.post('/playlists/:id/like', secure.auth, playlists.toggle);

/*
router.get('/play', secure.auth);
router.post('/play', secure.auth); 
*/

module.exports = router;