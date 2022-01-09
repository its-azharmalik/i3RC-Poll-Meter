const mongoose = require('mongoose');

const election_dataSchema = new mongoose.Schema({
    National_five_issues : {
        Issue_1 : {
            type : Number ,
            // required : true,
        },
        Issue_2 : {
            type : Number ,
            // required : true,
        },
        Issue_3 : {
            type : Number ,
            // required : true,
        },
        Issue_4 : {
            type : Number ,
            // required : true,
        },
        Issue_5 : {
            type : Number ,
            // required : true,
        },
    },
    Local_five_issues : {
        Issue_1 : {
            type : Number ,
            // required : true,
        },
        Issue_2 : {
            type : Number ,
            // required : true,
        },
        Issue_3 : {
            type : Number ,
            // required : true,
        },
        Issue_4 : {
            type : Number ,
            // required : true,
        },
        Issue_5 : {
            type : Number ,
            // required : true,
        },
    },
    // Impact_on_voting : {}
});

const Election_Data = mongoose.model("Election_Data" ,election_dataSchema);

module.exports = Election_Data;