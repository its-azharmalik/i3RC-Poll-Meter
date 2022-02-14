const { User } = require("../Schemas");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const userCreated = await User.create(req.body);
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

const allUsers = async (req ,res) =>{
    try {
        const users = await User.find({});
        res.json(users)
    } catch (error) {
        res.json(error);
    }
}

module.exports = {
    homeUser,
    createUser,
    LoginUser,
    allUsers
}