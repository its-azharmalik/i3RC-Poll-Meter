const { User, Voter } = require("../Schemas");

const postVoterData = async (req, res) => {
  let data = req.body;
  try {
    data = await Voter.create(req.body);
    res.json({
      note: "success",
      data,
    });
  } catch (error) {
    res.status(400).json({
      note: "erorr",
      error,
      data,
    });
  }
};

const updateVoterdata = async (req, res) => {
  let data = req.body;
  const id = req.params.id;
  try {
    data = await Voter.findByIdAndUpdate(id, req.body);
    res.json({
      note: "success",
      data,
    });
  } catch (error) {
    res.status(400).json({
      note: "erorr",
      error,
      data,
    });
  }
};

const getAllVoterdata = async (req, res) => {
  try {
    const data = await Voter.find({});
    res.json({
      note: "success",
      data,
    });
  } catch (error) {
    res.status(400).json({ note: "erorr", error });
  }
};

const getVoterdata = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Voter.findById(id);
    res.json({
      note: "success",
      data,
    });
  } catch (error) {
    res.status(400).json({ note: "erorr", error });
  }
};

const deleteVoterdata = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Voter.findByIdAndDelete(id);
    res.json({
      note: "success",
      data,
    });
  } catch (error) {
    res.status(400).json({ note: "erorr", error });
  }
};

const getVoterdataWithVoterId = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Voter.find({ "Upload_data.Voter_ID": id });
    res.json({
      note: "success",
      data,
    });
  } catch (error) {
    res.status(400).json({ note: "erorr", error });
  }
};

module.exports = {
  postVoterData,
  getAllVoterdata,
  getVoterdata,
  deleteVoterdata,
  getVoterdataWithVoterId,
  updateVoterdata,
};
