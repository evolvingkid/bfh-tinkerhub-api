const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const RepoModel = new mongoose.Schema({
    name: { type: String },
    user: { type: mongoose.Types.ObjectId, ref: "userModel" },
    fullName: { type: String },
    repoID: { type: Number },
    nodeID: { type: String },
    description: { type: String },
    url: { type: String },
    clone: { type: String },
    commits: [{ type: mongoose.Types.ObjectId, ref: "CommitModel" }],
    commitDates: [{ type: mongoose.Types.ObjectId, ref: "CommitDates" }],
    laguage: { type: String },
    defaultBranch: { type: String }
});

RepoModel.plugin(uniqueValidator, { message: "{PATH} already exists!" });

module.exports = Repo = mongoose.model("RepoModel", RepoModel);