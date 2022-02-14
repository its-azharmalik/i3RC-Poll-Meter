const db = require("./Db");
const isAuthenticated = require("./auth.config");
const checkauth = require("./checkauth.config");
const {
  isPollAdminClient,
  isPollAdminClientOR,
} = require("./isPollAdminClient");
const { isSystemAdmin, isSystemAdminOR } = require("./isSystemAdmin");
const { isDataCollecter, isDataCollecterOR } = require("./isDataCollecter");

module.exports = {
  db,
  isAuthenticated,
  checkauth,
  isPollAdminClient,
  isPollAdminClientOR,
  isSystemAdmin,
  isSystemAdminOR,
  isDataCollecter,
  isDataCollecterOR,
};
