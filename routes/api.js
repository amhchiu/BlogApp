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

/**
 * POST new obj, generate uid and save for url param.s
 */
router.post('/posts', async (req, res) => {
    req.body.uid = await getUID();
    Blog.create(req.body).then(function (post) {
        res.send(post);
    });
});

function getUID() {
    return new Promise((resolve, reject) => {
        let id = generateUID();
        Blog.find({ uid: id }).then(res => {
            return res.length == 0 ? resolve(id) : getUID();
        }).catch(err => {
            console.error(err);
        })
    })
};

module.exports = router;
