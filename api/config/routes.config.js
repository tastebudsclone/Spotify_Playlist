const express = require('express');
const router = express.Router();
const users = require('../controllers/users.controller');
const common = require('../controllers/common.controller');
const playlists = require('../controllers/playlists.controller');

const secure = require('../middlewares/secure.mid');
const usersMid = require('../middlewares/users.mid');

router.post('/login', users.login);
router.post('/register', users.create);
router.get('/users/:id', users.profile);
router.patch('/users/:id', secure.auth, users.settings);

router.get('/playlists', playlists.list);
router.post('/playlists/create/onArtists', secure.auth, playlists.createOnArtists);
router.delete('/playlists/:id', secure.auth, playlists.delete);


module.exports = router;