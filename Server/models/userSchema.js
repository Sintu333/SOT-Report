const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },

  departmentName: {
    type: String,
    required: true,
  },
  dateJoining: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    default: "School Of Technology",
  },
  designation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
