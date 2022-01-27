const mongoose = require("mongoose");

const voterSchema = new mongoose.Schema({
  srNo: {
    type: Number,
    required: true,
    unique: true,
  },
  Upload_data: {
    Lok_Sabha_Name: {
      type: String,
      // required : true ,
    },
    Lok_Sabha_Number: {
      type: Number,
      // required : true,
    },
    Vidhan_Sabha_Name: {
      type: String,
      // required : true ,
    },
    Vidhan_Sabha_Number: {
      type: Number,
      // required : true,
    },
    polling_Booth_number: {
      type: Number,
      // required : true ,
    },
    Village_Name: {
      type: String,
      // required : true ,
    },
    Ward_No: {
      type: Number,
      // required : true ,
    },
    Voter_ID: {
      type: Number,
      required: true,
      unique: true,
    },
    Locality: {
      type: String,
      // required : true ,
    },
    Name: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    Gender: {
      type: String,
      required: true,
    },
    Age: {
      type: Number,
      required: true,
    },
    Father_or_Husbands_name: {
      type: String,
      // required:true
    },
    Voter_status: {
      type: Number,
      // required : true
    },
    Contact_number_for_all_active_voters: {
      type: Number,
      // required : true
    },
    Qualification: {
      type: Number,
      // required : true
    },
    Ocuupation: {
      type: Number,
      // required : true
    },
  },
  Yearly_Election_Data: [
    {
      Election_Data_ID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Election_Data",
        required: true,
      },
      Year: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Voter = mongoose.model("Voter", voterSchema);

module.exports = Voter;
