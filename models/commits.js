const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const CommitModel = new mongoose.Schema({
    author: {
        name: { type: String },
        email: { type: string },
    },
    committer: {
        name: { type: String },
        email: { type: string },
    },
    date: { type: Date },
    message: { type: String },
    id: { type: String },
    url: { type: String },
    repo: { type: mongoose.Types.ObjectId, ref: "RepoModel" }
});

CommitModel.plugin(uniqueValidator, { message: "{PATH} already exists!" });

module.exports = commit = mongoose.model("CommitModel", CommitModel);