const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const investorSchema = new Schema({
    firstName: String,
    avatarUrl: String,
    lastName: String,
});

module.exports = mongoose.model("Investor", investorSchema);