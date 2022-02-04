const mongoose = require("mongoose");
const Voter = require("./Voter");

const election_dataSchema = new mongoose.Schema({
  National_five_issues: {
    Issue_1: {
      type: Number,
      required: true,
    },
    Issue_2: {
      type: Number,
      // required : true,
    },
    Issue_3: {
      type: Number,
      // required : true,
    },
    Issue_4: {
      type: Number,
      // required : true,
    },
    Issue_5: {
      type: Number,
      // required : true,
    },
  },
  Local_five_issues: {
    Issue_1: {
      type: Number,
      // required : true,
    },
    Issue_2: {
      type: Number,
      // required : true,
    },
    Issue_3: {
      type: Number,
      // required : true,
    },
    Issue_4: {
      type: Number,
      // required : true,
    },
    Issue_5: {
      type: Number,
      // required : true,
    },
  },
  Impact_on_voting: {
    is_candidate_of_my_community_or_caste_or_religion: {
      type: Number,
      // required: true
    },
    is_candidate_known_for_years: {
      type: Number,
      // required: true
    },
    is_candidate_from_my_area: {
      type: Number,
      // required: true
    },
    is_candidate_help_us_solve_problem: {
      type: Number,
      // required: true
    },
    is_candidate_popular: {
      type: Number,
      // required: true
    },
    is_candidate_with_strong_ideology: {
      type: Number,
      // required: true
    },
    is_candidate_nonCorrupt_or_honest: {
      type: Number,
      // required: true
    },
    will_analyse_past_of_the_candidate: {
      type: Number,
      // required: true
    },
    based_on_suggestion_of_my_problem: {
      type: Number,
      // required: true
    },
    based_on_suggestion_of_my_community: {
      type: Number,
      // required: true
    },
    is_candidate_active_in_my_area: {
      type: Number,
      // required: true
    },
    is_candidate_available_in_my_area: {
      type: Number,
      // required: true
    },
  },
  Parameters_to_vote: {
    chose_to_vote_after_after_duly_considering_the_candidate: {
      type: Number,
      // required: true
    },
    always_vote_for_elections: {
      type: Number,
      // required: true
    },
    loyal_to_only_one_party: {
      type: Number,
      // required: true
    },
    my_whole_family_loyal_to_only_one_party: {
      type: Number,
      // required: true
    },
    always_vote_for_most_deserving: {
      type: Number,
      // required: true
    },
    keep_changing_my_vote_based_on_candidates_every_years: {
      type: Number,
      // required: true
    },
    vote_for_any_candidate_that_will_help_me_personally: {
      type: Number,
      // required: true
    },
    will_vote_for_anyone_whom_i_am_comforatble_with: {
      type: Number,
      // required: true
    },
    wont_hesitate_to_vote_any_new_party_or_candidate_if_deserving: {
      type: Number,
      // required: true
    },
    i_believe_one_should_keep_changing_their_vote: {
      type: Number,
      // required: true
    },
    i_wait_till_last_time_to_decide_my_vote: {
      type: Number,
      // required: true
    },
    i_have_voted_by_getting_influenced_by_campaigns: {
      type: Number,
      // required: true
    },
    i_have_voted_by_getting_influenced_by_party_workers: {
      type: Number,
      // required: true
    },
    i_debate_and_discuss_with_my_family_and_friends_and_also_do_research: {
      type: Number,
      // required: true
    },
  },
  know_the_candidate_of: {
    INC: {
      type: Number,
      // required: true,
    },
    BJP: {
      type: Number,
      // required: true,
    },
    SP: {
      type: Number,
      // required: true,
    },
    TMC: {
      type: Number,
      // required: true,
    },
    other1: {
      type: Number,
      // required: true,
    },
    other2: {
      type: Number,
      // required: true,
    },
    other3: {
      type: Number,
      // required: true,
    },
    other4: {
      type: Number,
      // required: true,
    },
  },
  name_of_party_candidate: {
    INC1: {
      type: String,
      // required: true,
    },
    INC2: {
      type: String,
      // required: true,
    },
    INC3: {
      type: String,
      // required: true,
    },
    BJP1: {
      type: String,
      // required: true,
    },
    BJP2: {
      type: String,
      // required: true,
    },
    BJP3: {
      type: String,
      // required: true,
    },
    BSP1: {
      type: String,
      // required: true,
    },
    BSP2: {
      type: String,
      // required: true,
    },
    BSP3: {
      type: String,
      // required: true,
    },
    SP1: {
      type: String,
      // required: true,
    },
    SP2: {
      type: String,
      // required: true,
    },
    SP3: {
      type: String,
      // required: true,
    },
    TMC1: {
      type: String,
      // required: true,
    },
    TMC2: {
      type: String,
      // required: true,
    },
    TMC3: {
      type: String,
      // required: true,
    },
    other1: {
      type: String,
      // required: true,
    },
    other2: {
      type: String,
      // required: true,
    },
    other3: {
      type: String,
      // required: true,
    },
  },
  Parameter_to_assess: {
    name1_PPAP: {
      type: String,
      // required: true
    },
    name1_HAI: {
      type: String,
      // required: true
    },
    name1_popularity: {
      type: String,
      // required: true
    },
    name1_visionary: {
      type: String,
      // required: true
    },
    name1_approach_ability: {
      type: String,
      // required: true
    },
    name1_CFP: {
      type: String,
      // required: true
    },
    name1_WFMC: {
      type: String,
      // required: true
    },
    name1_intelligent: {
      type: String,
      // required: true
    },
    name1_local: {
      type: String,
      // required: true
    },
    name1_HAIA: {
      type: String,
      // required: true
    },
    name1_MPLIMC: {
      type: String,
      // required: true
    },
    name2_PPAP: {
      type: String,
      // required: true
    },
    name2_HAI: {
      type: String,
      // required: true
    },
    name2_popularity: {
      type: String,
      // required: true
    },
    name2_visionary: {
      type: String,
      // required: true
    },
    name2_approach_ability: {
      type: String,
      // required: true
    },
    name2_CFP: {
      type: String,
      // required: true
    },
    name2_WFMC: {
      type: String,
      // required: true
    },
    name2_intelligent: {
      type: String,
      // required: true
    },
    name2_local: {
      type: String,
      // required: true
    },
    name2_HAIA: {
      type: String,
      // required: true
    },
    name2_MPLIMC: {
      type: String,
      // required: true
    },
    name3_PPAP: {
      type: String,
      // required: true
    },
    name3_HAI: {
      type: String,
      // required: true
    },
    name3_popularity: {
      type: String,
      // required: true
    },
    name3_visionary: {
      type: String,
      // required: true
    },
    name3_approach_ability: {
      type: String,
      // required: true
    },
    name3_CFP: {
      type: String,
      // required: true
    },
    name3_WFMC: {
      type: String,
      // required: true
    },
    name3_intelligent: {
      type: String,
      // required: true
    },
    name3_local: {
      type: String,
      // required: true
    },
    name3_HAIA: {
      type: String,
      // required: true
    },
    name3_MPLIMC: {
      type: String,
      // required: true
    },
    name4_PPAP: {
      type: String,
      // required: true
    },
    name4_HAI: {
      type: String,
      // required: true
    },
    name4_popularity: {
      type: String,
      // required: true
    },
    name4_visionary: {
      type: String,
      // required: true
    },
    name4_approach_ability: {
      type: String,
      // required: true
    },
    name4_CFP: {
      type: String,
      // required: true
    },
    name4_WFMC: {
      type: String,
      // required: true
    },
    name4_intelligent: {
      type: String,
      // required: true
    },
    name4_local: {
      type: String,
      // required: true
    },
    name4_HAIA: {
      type: String,
      // required: true
    },
    name4_MPLIMC: {
      type: String,
      // required: true
    },
  },
  old_data_for_future_reference: {
    Voted_for_mp: [
      {
        type: Number,
        // required: true
      },
    ],
    Voted_for_mla: [
      {
        type: Number,
        // required: true
      },
    ],
    Will_vote: [
      {
        type: Number,
        // required: true
      },
    ],
    loyalty1: [
      {
        type: Number,
        // required: true
      },
    ],
  },
  Numbers_of_voters_in_house: {
    type: Number,
    // required: true
  },
  religious: {
    type: Number,
    // required: true
  },
  caste: {
    type: String,
    // required: true
  },
  need_transportation: {
    type: Number,
    // required: true
  },
  remarks: {
    type: String,
    // required: true,
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
  Lok_Sabha_Number: {
    type: Number,
    required: true,
  },
});

const Election_Data = mongoose.model("Election_Data", election_dataSchema);

module.exports = Election_Data;

//Parameter TO Asses short forms
//PPAP - Past Performance A-Performer
//HAI - Honest And Integrity
//CFP - Care For People
//WFMC - Work FOr My COmmunity
//HAIA - Helpful and Active In my Area
//MPLIMC - Most Powerful Leader In My Constituency
