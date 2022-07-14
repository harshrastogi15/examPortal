const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  type: { type: String },
  ques: { type: String },
  quesImg: { type: Buffer },
  choice: [{ type: String }],
  choiceImg: [{ type: Buffer }],
  answer: { type: String },
});

module.exports = mongoose.model("cse", schema);
