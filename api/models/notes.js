const mongoose = require("mongoose"); // mongoose through ape database module eka hadenwa

const notesSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Notes", notesSchema); //databse eke hadena name eki, schema ekai
