const mongoose = require("mongoose");
const { authType } = require("../Utils");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // unique : true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  authType: {
    type: String,
    enum: authType,
    required: true,
  },
  party: {
    type: String,
  },
  lok_sabha_access: [
    {
      type: String,
    },
  ],
  vidhan_sabha_access: [
    {
      state: {
        type: String,
        // required:true,
      },
      vdns: [
        {
          type: Number,
        },
      ],
    },
  ],
  ward_no_access: [
    {
      state: { type: String },
      cities: [
        {
          city: {
            type: String,
          },
          wdns: [
            {
              type: String,
            },
          ],
        },
      ],
    },
  ],
  Data_Collector_access: [
    {
      state: { type: String },
      cities: [
        {
          city: {
            type: String,
          },
          pbns: [
            {
              type: Number,
            },
          ],
        },
      ],
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
