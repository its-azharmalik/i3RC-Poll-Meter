const express = require('express');
const { User } = require('../Schemas');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { isAuthenticated, checkauth } = require('../Config');

const createUser = async (req, res) => {
  try {
    const { name, email, password, authType } = req.body;
    const user = {
      name,
      email,
      password,
      authType,
    };
    user.password = await bcrypt.hash(req.body.password, 10);
    const userCreated = await User.create(user);
    res.send(userCreated);
  } catch (error) {
    res.send(error);
  }
};

const LoginUser = async (req, res) => {
  try {
    const { email, password, name, authType } = req.user[0];
    const jwtUser = {
      email,
      password,
      authType,
      name,
    };
    const accessToken = jwt.sign(jwtUser, process.env.ACCESS_TOKEN);
    const user = req.user;
    res.json({
      AccessToken: accessToken,
      authType: user[0].authType,
      name: user[0].name,
      email: user[0].email,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const homeUser = async (req, res) => {
  const user = req.user;
  // console.log(user )
  res.json(user);
};

router.post('/login', checkauth, LoginUser);
router.post('/create', createUser);
router.get('/home', isAuthenticated, homeUser);

module.exports = router;
