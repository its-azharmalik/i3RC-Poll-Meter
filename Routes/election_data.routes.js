const express = require("express");
const {
  isAuthenticated,
  isDataCollecterOR,
  isDataCollecter,
} = require("../Config");
const {
  postElectionData,
  getElectionData,
  updateElectionData,
  deleteElectionData,
} = require("../Controller/election_data.controller");
const router = express.Router();

router.post("/electiondata/:voterid", isAuthenticated, postElectionData);
router.get(
  "/electiondata/:electiondataid",
  isAuthenticated,
  isDataCollecter,
  getElectionData
);
router.put(
  "/electiondata/:electiondataid",
  isAuthenticated,
  isDataCollecter,
  updateElectionData
);
// router.delete('/electiondata/:electiondataid', deleteElectionData );

module.exports = router;
