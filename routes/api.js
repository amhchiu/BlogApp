const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const { URLFriendly } = require('../packages/generate');

/**
 * uid for mongodb. amhchiu.com/:user/:uid/:
 */
const generateUID = () => {
    let firstPart = (Math.random() * 46656) | 0;
    let secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)) | 0;
    secondPart = ("000" + secondPart.toString(36)) | 0;

    return firstPart+secondPart;
};

router.get('/title/:title', (req, res) => {
    let title = req.params.title;
    let friendly = URLFriendly(title);
    res.send(friendly);
});

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
