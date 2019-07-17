var mongoose = require('mongoose');

<<<<<<< HEAD
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
=======
let PostSchema = new mongoose.Schema({
    key: Number,
    postTitle: String,
    postSummary: String,
    verdict: String,
    category: [String],
    image: String
});

module.exports = mongoose.model('Post', PostSchema)
>>>>>>> frontEnd
