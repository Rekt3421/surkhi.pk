var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    key: Number,
    title: String,
    summary: String,
    verdict: String,
    category: [String],
    image: String,
    //date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', PostSchema);