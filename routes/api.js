const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/posts', function(req, res){
    Blog.find({}).then(function(posts){
        res.send(posts);
    });
});

module.exports = router;
