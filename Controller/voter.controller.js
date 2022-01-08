const { User , Voter } = require("../Schemas");

const postVoterData = async (req,res) =>{
    try {
        const data = req.body;
        await Voter.create(data);
        res.json({
            note : "Successfully added Voter data" ,
            data : data
        });
    } catch (error) {
        res.status(400).json(error);
    }
}

const getAllVoterdata = async (req,res) =>{
    try {
        const data = await Voter.find({});
        res.json({
            note : "success",
            data 
        })
    } catch (error) {
        res.status(400).json(error);
    }
}

const getVoterdata = async (req,res) =>{
    try {
        const id = req.params.id;
        const data = await Voter.findById(id);
        res.json({
            note : "success",
            data 
        })
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteVoterdata = async (req,res) =>{
    try {
        const id = req.params.id;
        const data = await Voter.findByIdAndDelete(id);
        res.json({
            note : "success",
            data 
        })
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    postVoterData,
    getAllVoterdata,
    getVoterdata,
    deleteVoterdata
}