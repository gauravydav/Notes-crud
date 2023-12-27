const mongoose = require("mongoose");

const schema = new mongoose.Schema({ title: String, body: String });
const Notes = mongoose.model("Notes", schema);

module.exports = Notes;
