const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const { URLFriendly, generateUID } = require('../packages/generate');

router.get('/posts', (_req, res) => {
    Blog.find({}).then( posts => {
        res.send(posts);
    }).catch( err => {
        res.status(500).send(err);
    })
});

router.get('/title/:title', (req, res) => {
    let title = req.params.title;
    let friendly = URLFriendly(title);
    res.send(friendly);
});

router.get('/uid/:uid', (req, res) => {
    console.log('uid');
    Blog.find({uid: req.params.uid}).then(post => {
        res.json(post[0]);
    }) //Add catch
});


/**
 * POST new obj, generate uid and save for url param.s
 */
router.post('/posts', async (req, res) => {
    req.body.uid = await getUID();
    req.body.urlTitle = URLFriendly(req.body.title);
    Blog.create(req.body).then(function (post) {
        res.send(post);
    });
});

router.get('/user/draft', async (req, res) => {
    
});


/**
 * Generates a unique 6 character alphanumeric random string. Has 36^3+36^3 permutations 
 */
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
