const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const { URLFriendly, generateUID } = require('../packages/generate');

router.get('/title/:title', (req, res) => {
    let title = req.params.title;
    let friendly = URLFriendly(title);
    res.send(friendly);
});

router.get('/:uid/:title', (req, res) => {

});

router.get('/posts', function (req, res) {
    Blog.find({}).then(function (posts) {
        res.send(posts);
    });
});

router.post('/posts', function (req, res) {
    //generate uid for post
    req.body.uid = getUID();
    console.log(req.body);
    Blog.create(req.body).then(function (post) {
        res.send(post);
    });
});

function getUID() {
    console.log('getiod')
    let id = generateUID();
    console.log(id)
        Blog.find({ uid: id }).then(res => {
            console.log('hello');
            console.log(res);
            return res == [] ? getUID() : id;
        }).catch(err => {
            console.log(err)
        })
};

module.exports = router;
