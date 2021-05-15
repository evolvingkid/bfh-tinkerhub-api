const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userModel = new mongoose.Schema({
    username: { type: String },
    image: { type: String },
    url: { type: String },
    htmlUrl: { type: String }
});

userModel.plugin(uniqueValidator, { message: "{PATH} already exists!" });

module.exports = User = mongoose.model("userModel", userModel);