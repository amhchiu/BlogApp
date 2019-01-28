const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//connect to mongodb. Define the collection used here. 
mongoose.connect("mongodb://localhost/blogApp01", {useNewUrlParser: true});

// ---Middleware---
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//initialise routes

//Listen for requests on :8080
const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT);
});
