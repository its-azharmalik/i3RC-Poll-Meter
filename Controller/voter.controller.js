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

const getAllVoterDataLkn = async (req,res) =>{
  try {
    const q = req.query;
    const keys = Object.keys(q);
    if(keys.length === 0){
      res.status(200).json({
        note:"NO DATA AVAILABLE QUERIES REQUIRED"
      })
    }
    else{
      const allVoterData = await Voter.find({});
      let final_data =[];
      keys.forEach((key) => {
        let  datas = allVoterData;
        const queryLkn = parseInt(q[key]);
        datas.filter((data) => data.Lok_Sabha_Number === queryLkn)  
        console.log(datas);
        final_data.push(datas);
      });
      res.json({
        note : "succes",
        final_data
      })
    }
  } catch (error) {
    res.status(400).json({
      note: "error",
      error
    })
  }
}

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
  getAllVoterDataLkn
};
