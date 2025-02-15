const express = require('express');
const { User } = require('../Schemas');
const router = express.Router();

const { isAuthenticated, checkauth, isPollAdminClient } = require('../Config');
const {LoginUser , createUser , homeUser , allUsers} = require('../Controller/auth.controller')

router.post('/login', checkauth, LoginUser );
router.post('/create', createUser);
router.get('/home', isAuthenticated, homeUser);
router.get('/allusers'   ,allUsers);

module.exports = router;
