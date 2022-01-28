const db = require("./Db");
const isAuthenticated = require("./auth.config");
const checkauth = require("./checkauth.config");
const {
  isPollAdminClient,
  isPollAdminClientOR,
} = require("./isPollAdminClient");
const { isBLO, isBLO_OR } = require("./isBLO");
const { isSystemAdmin, isSystemAdminOR } = require("./isSystemAdmin");
const { isDataCollecter, isDataCollecterOR } = require("./isDataCollecter");

module.exports = {
  db,
  isAuthenticated,
  checkauth,
  isPollAdminClient,
  isPollAdminClientOR,
  isBLO,
  isBLO_OR,
  isSystemAdmin,
  isSystemAdminOR,
  isDataCollecter,
  isDataCollecterOR,
};
