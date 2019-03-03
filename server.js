const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/api');

//connect to mongodb. Define the collection used here. 
mongoose.connect("mongodb://localhost:27017/blogdb", {useNewUrlParser: true});

// ---Middleware---
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/*initialise routes. we connet to our mongodb using mongoose. collection blogdb. we use middleware here, our REST api routes. 
i.e. for a GET req. We define a schema to validate against. we define the Model containing the document we are doing api calls against. Model = document, schema. 
*/
app.use('/api', router);

//Listen for requests on :8080
const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT);
});
