const express = require('express');
const {
  isAuthenticated,
  isDataCollecterOR,
  isDataCollecter,
} = require('../Config');
const {
  postElectionData,
  getElectionData,
  updateElectionData,
  deleteElectionData,
  getAllElectionData,
  getAllElectionDataLkn,
} = require('../Controller/election_data.controller');
const router = express.Router();

router.get('/electiondata', isAuthenticated, getAllElectionData);
router.get('/electiondatalkn', isAuthenticated, getAllElectionDataLkn);
router.post('/electiondata/:voterid', isAuthenticated, postElectionData);
router.get(
  '/electiondata/:electiondataid',
  // isAuthenticated,
  // isDataCollecter,
  getElectionData
);
router.put(
  '/electiondata/:electiondataid',
  isAuthenticated,
  isDataCollecter,
  updateElectionData
);
// router.delete('/electiondata/:electiondataid', deleteElectionData );

module.exports = router;
