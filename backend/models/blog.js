const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,  
        required: true
    },
    body: String,
    description: String,
    date: { type: Date, default: Date.now },
    tags: String,
    author: String,
    uid: {
        type: String,
        required: false
    },
    urlTitle: {
        type: String,
        required: false
    }
});

//mongoose.model(mongodb document name to read, schema to check against). this is a Model. an instance of a Model is a document. 
const Blog = mongoose.model('posts', blogSchema);

module.exports = Blog;
