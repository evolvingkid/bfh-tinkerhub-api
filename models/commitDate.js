const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const CommitDates = new mongoose.Schema({
    date: { type: String },
    totalCommit: { type: String },
    recordedLastCommit: { type: String },
    repo : { type: mongoose.Types.ObjectId, ref: "RepoModel" }
});

CommitDates.plugin(uniqueValidator, { message: "{PATH} already exists!" });

module.exports = Commit = mongoose.model("CommitDates", CommitDates);