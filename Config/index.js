const db = require('./Db');
const isAuthenticated = require('./auth.config');
const checkauth = require('./checkauth.config');

module.exports = {
    db,
    isAuthenticated,
    checkauth,
}