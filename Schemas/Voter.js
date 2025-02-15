const mongoose = require('mongoose');

const voterSchema = new mongoose.Schema({
  Upload_data: {
    Voter_ID: {
      type: Number,
      required: true,
      unique: true,
    },
    Name: {
      type: String,
      // required: true,
    },
    Gender: {
      type: String,
      // required: true,
    },
    Age: {
      type: Number,
      // required: true,
    },
    Father_or_Husbands_name: {
      type: String,
      // required:true
    },
    Address: {
      type: String,
      // required: true,
    },
    Village_Name: {
      type: String,
      // required : true ,
    },
    Ward_No: {
      type: Number,
      // required : true ,
    },
    state: {
      type: String,
      // required : true ,
    }
    ,
    city: {
      type: String,
      // required : true ,
    },
    Lok_Sabha_Name: {
      type: String,
      // required: true,
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
    polling_Booth_number_wdn: {
      type: Number,
      // required : true ,
    },
    polling_Booth_number_lkn: {
      type: Number,
      // required : true ,
    },
    polling_Booth_number_vdn: {
      type: Number,
      // required : true ,
    },
    Locality: {
      type: String,
      // required : true ,
    },
    Voter_status: {
      type: Number,
      // required : true
    },
  },
  Election_Data_ID: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Election_Data',
    // required: true,
  },
});

const Voter = mongoose.model('Voter', voterSchema);

module.exports = Voter;
