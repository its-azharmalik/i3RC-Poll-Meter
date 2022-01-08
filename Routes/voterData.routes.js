const express = require('express');
const router = express.Router();

const { isAuthenticated, checkauth, isPollAdminClient , isDataCollecter , isDataCollecterOR , isBLO_OR , isPollAdminClientOR , isSystemAdminOR , isSystemAdmin } = require('../Config');
const { postVoterData , getAllVoterdata, getVoterdata, deleteVoterdata } = require('../Controller/voter.controller');

router.post('/voterdata', isAuthenticated , isDataCollecter , postVoterData);
router.get('/voterdata' , isAuthenticated , isDataCollecterOR, getAllVoterdata);
router.get('/voterdata/:id',isAuthenticated , isDataCollecterOR , getVoterdata);
router.delete('/voterdata/:id', isAuthenticated ,deleteVoterdata);

module.exports = router;