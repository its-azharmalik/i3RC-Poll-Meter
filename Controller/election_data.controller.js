const { Voter, Election_Data } = require("../Schemas");

const postElectionData = async (req, res) => {
  const voterid = req.params.voterid;
  let data = req.body;
  try {
    const VoterData = await Voter.findById(voterid);
    const Lok_Sabha_Number = VoterData.Upload_data?.Lok_Sabha_Number;
    const Vidhan_Sabha_Number = VoterData.Upload_data?.Vidhan_Sabha_Number;
    const Ward_No = VoterData.Upload_data?.Ward_No;
    const state = VoterData.Upload_data?.state;
    const city = VoterData.Upload_data?.city;
    if (
      !Lok_Sabha_Number ||
      !Vidhan_Sabha_Number ||
      !Ward_No ||
      !state ||
      !city
    ) {
      res.status(400).json({
        note: "LOK SABHA NUMBER , VIDHAN SABHA , WARD NO. , STATE OR CITY DOES NOT EXIST",
      });
    } else {
      console.log(Vidhan_Sabha_Number, state, city);
      data.data.Lok_Sabha_Number = Lok_Sabha_Number;
      data.data.Vidhan_Sabha_Number = Vidhan_Sabha_Number;
      data.data.Ward_No = Ward_No;
      data.data.state = state;
      data.data.city = city;
    }
    const new_election_data = await Election_Data.create(data.data);
    const new_voter_data = await Voter.findByIdAndUpdate(
      { _id: voterid },
      {
        $push: {
          Election_Data_ID: new_election_data._id,
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

const getAllElectionData = async (req, res) => {
  try {
    const data = await Election_Data.find({});
    res.json({
      note: "success",
      data,
    });
  } catch (error) {
    res.status(400).json({
      note: "error",
      error,
    });
  }
};

const getAllElectionDataLkn = async (req, res) => {
  try {
    const qwithUnderscores = req.query;
    const q = qwithUnderscores.replace(/__/g, " ");
    const keys = Object.keys(q);
    if (keys.length === 0) {
      res.status(200).json({
        note: "NO DATA AVAILABLE QUERIES REQUIRED",
      });
    } else {
      const ED_Data = await Election_Data.find({});
      let final_data = [];
      keys.forEach((key) => {
        let datas = ED_Data;
        const queryLkn = parseInt(q[key]);
        final_data.push(
          datas.filter(function (data) {
            return data.Lok_Sabha_Number === queryLkn;
          })
        );
      });
      res.json({
        note: "succes",
        final_data,
      });
    }
  } catch (error) {
    res.status(400).json({
      note: "error",
      error,
    });
  }
};

const getAllElectionDataVdn = async (req, res) => {
  try {
    const q = req.query;
    const stateWithUnderscores = q.state;
    const state = stateWithUnderscores.replace(/__/g, " ");

    console.log(q, state);
    const keys = Object.keys(q);
    if (keys.length === 0) {
      res.status(200).json({
        note: "NO DATA AVAILABLE QUERIES REQUIRED",
      });
    } else {
      console.log("H");
      const ED_Data = await Election_Data.find({
        state: state,
      });
      let final_data = [];
      keys.forEach((key) => {
        let datas = ED_Data;
        const queryVdn = parseInt(q[key]);
        final_data.push(
          datas.filter(function (data) {
            return data.Vidhan_Sabha_Number === queryVdn;
          })
        );
      });
      res.json({
        note: "succes",
        final_data,
      });
    }
  } catch (error) {
    res.status(400).json({
      note: "error",
      error,
    });
  }
};

const getAllElectionDataWdn = async (req, res) => {
  try {
    const q = req.query;
    const stateWithUnderscores = q.state;
    const state = stateWithUnderscores.replace(/__/g, " ");
    const cityWithUnderscores = q.city;
    const city = cityWithUnderscores.replace(/__/g, " ");
    const keys = Object.keys(q);
    console.log(keys, state, city);
    if (keys.length === 0) {
      res.status(200).json({
        note: "NO DATA AVAILABLE QUERIES REQUIRED",
      });
    } else {
      const ED_Data = await Election_Data.find({
        state: state,
        city: city,
      });
      let final_data = [];
      keys.forEach((key) => {
        let datas = ED_Data;
        const queryWdn = parseInt(q[key]);
        final_data.push(
          datas.filter(function (data) {
            return data.Ward_No === queryWdn;
          })
        );
      });
      res.json({
        note: "succes",
        final_data,
      });
    }
  } catch (error) {
    res.status(400).json({
      note: "error",
      error,
    });
  }
};

// { lkn: '488486864', lkn1: '1' }

module.exports = {
  postElectionData,
  getElectionData,
  updateElectionData,
  deleteElectionData,
  getAllElectionData,
  getAllElectionDataLkn,
  getAllElectionDataVdn,
  getAllElectionDataWdn,
};
