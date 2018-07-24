const express = require('express');
var routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// setup express app
var app = express();

// connect to mLab
mongoose.connect('mongodb://ninja-one:test123@ds147451.mlab.com:47451/exploring-mlab');

mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// initialize routes
app.use('/api', routes);

// listen for requests
app.listen(process.env.port || 4000, function() {
  console.log("listening for the requests");
});