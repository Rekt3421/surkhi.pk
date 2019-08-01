var mongoose = require('mongoose');

let PostSchema = new mongoose.Schema({
    key: Number,
    postTitle: String,
    postSummary: String,
    verdict: String,
    category: [String],
    image: String
});

module.exports = mongoose.model('Post', PostSchema)
