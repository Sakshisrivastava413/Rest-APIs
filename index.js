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

// error handling middlewares
app.use(function(err, req, res, next) {
  // console.log(err);
  res.status(422).send({error: err.message});
})

// listen for requests
app.listen(process.env.port || 4000, function() {
  console.log("listening for the requests");
});