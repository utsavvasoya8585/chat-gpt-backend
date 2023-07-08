const mongoose = require("mongoose");
const { Schema } = mongoose;

const RuleSchema = new Schema({
  uid: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  rules: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Rule = mongoose.model("rule", RuleSchema);
module.exports = Rule;
