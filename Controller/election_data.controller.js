const { Voter, Election_Data } = require("../Schemas");

const postElectionData = async (req, res) => {
  const voterid = req.params.voterid;
  let data = req.body;
  try {
    const new_election_data = await Election_Data.create(data.data);
    const new_voter_data = await Voter.findByIdAndUpdate(
      { _id: voterid },
      {
        $push: {
          Yearly_Election_Data: {
            Year: req.body.Year,
            Election_Data_ID: new_election_data._id,
          },
        },
      }
    );
    res.json({
      note: "success",
      voterData: new_voter_data,
      electionData: new_election_data,
    });
  } catch (error) {
    res.status(400).json({
      note: "error",
      error,
      data,
    });
    console.log(error);
  }
};

const getElectionData = async (req, res) => {
  const electiondataid = req.params.electiondataid;
  try {
    const new_election_data = await Election_Data.findById(electiondataid);
    res.json({
      note: "success",
      electionData: new_election_data,
    });
  } catch (error) {
    res.status(400).json({
      note: "error",
      error,
    });
  }
};

const updateElectionData = async (req, res) => {
  const electiondataid = req.params.electiondataid;
  const data = req.body;
  try {
    const old_election_data = await Election_Data.findById(electiondataid);
    const new_election_data = await Election_Data.findByIdAndUpdate(
      electiondataid,
      data
    );
    res.json({
      note: "success",
      newElectionData: data,
      oldElectionData: old_election_data,
    });
  } catch (error) {
    res.status(400).json({
      note: "error",
      error,
      data,
    });
  }
};

const deleteElectionData = async (req, res) => {
  const electiondataid = req.params.electiondataid;
  try {
    const new_election_data = await Election_Data.findById(electiondataid);
    Voter.findOneAndUpdate(
      { Yearly_Election_Data: { Election_Data_ID: electiondataid } },
      {
        $pull: {
          Yearly_Election_Data: { Election_Data_ID: electiondataid },
        },
      }
    );
    // await new_election_data.remove();
    res.json({
      note: "success",
      dataDeleted: new_election_data,
    });
  } catch (error) {
    res.status(400).json({
      note: "error",
      error,
    });
  }
};

module.exports = {
  postElectionData,
  getElectionData,
  updateElectionData,
  deleteElectionData,
};
