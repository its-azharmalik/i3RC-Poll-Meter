const express = require("express");
const router = express.Router();

const {
  isAuthenticated,
  checkauth,
  isPollAdminClient,
  isDataCollecter,
  isDataCollecterOR,
  isBLO_OR,
  isPollAdminClientOR,
  isSystemAdminOR,
  isSystemAdmin,
} = require("../Config");
const {
  postVoterData,
  getAllVoterdata,
  getVoterdata,
  deleteVoterdata,
  getVoterdataWithVoterId,
  updateVoterdata,
  getAllVoterDataLkn,
} = require("../Controller/voter.controller");

router.post("/voterdata", isAuthenticated, postVoterData);
router.get("/voterdata", getAllVoterdata);
router.get("/voterdatalkn", getAllVoterDataLkn);
router.get("/voterdata/:id", getVoterdata);
router.delete("/voterdata/:id", isAuthenticated, deleteVoterdata);
router.put("/voterdata/:id", isAuthenticated, updateVoterdata);

router.get("/voterdatawithvoterid/:id", getVoterdataWithVoterId);

module.exports = router;
