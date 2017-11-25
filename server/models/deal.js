const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dealSchema = new Schema({
    companyName: String,
    companyLogoUrl: String,
    dealName: String,
    categoryName: {
        type: String,
        enum: ["Pre-Seed / Seed", "Series A", "Series B", "Series C"],
    },
    description: String,
    investors: [String],
});

module.exports = mongoose.model("Deal", dealSchema);