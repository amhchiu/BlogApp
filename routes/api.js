const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/posts', function(req, res){
    Blog.find({}).then(function(posts){
        res.send(posts);
    });
});

router.post('/posts', function(req, res){
    Blog.create(req.body).then(function(post){
        res.send(post);
    });
});

module.exports = router;
