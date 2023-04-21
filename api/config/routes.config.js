const express = require('express');
const router = express.Router();
const users = require('../controllers/users.controller');
const common = require('../controllers/common.controller');

router.post('/login', common.login);
router.post('/register', users.create);

router.get('/users/:id', users.profile);
router.patch('/users/:id/settings', users.settings);


module.exports = router;