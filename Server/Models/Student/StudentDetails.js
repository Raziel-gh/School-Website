const mongoose = require("mongoose");

const studentDetails = new mongoose.Schema({
  rollNo: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("Student Detail", studentDetails);
