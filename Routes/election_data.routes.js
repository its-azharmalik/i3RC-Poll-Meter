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
  getAllElectionData,
  getAllElectionDataLkn,
  getAllElectionDataVdn,
  getAllElectionDataWdn,
} = require("../Controller/election_data.controller");
const router = express.Router();

router.get("/electiondata", getAllElectionData);
router.get("/electiondatalkn", getAllElectionDataLkn);
router.get("/electiondatavdn", getAllElectionDataVdn);
router.get("/electiondatawdn", getAllElectionDataWdn);
router.post("/electiondata/:voterid", isAuthenticated, postElectionData);
router.get(
  "/electiondata/:electiondataid",
  // isAuthenticated,
  // isDataCollecter,
  getElectionData
);
router.put(
  "/electiondata/:electiondataid",
  // isAuthenticated,
  // isDataCollecter,
  updateElectionData
);
// router.delete('/electiondata/:electiondataid', deleteElectionData );

module.exports = router;
