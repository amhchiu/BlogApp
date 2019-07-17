const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/api');

//connect to mongodb. Define the collection used here. 
mongoose.connect("mongodb://localhost:27017/blogdb", {useNewUrlParser: true});

// ---Middleware---
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/*initialise routes. we connet to our mongodb using mongoose. collection blogdb. we use middleware here, our REST api routes. 
i.e. for a GET req. We define a schema to validate against. we define the Model containing the document we are doing api calls against. Model = document, schema. 
*/
app.use('/api', router);

/**
 * app.get('/*', function(req, res){
    res.sendFile(__dirname + "/public/index.html", function(err){
        if(err)res.status(500).send(err);
    });
});
 */

app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT}`);
});
