const express = require('express');
var routes = require('./routes/api');
const bodyParser = require('body-parser');

// setup express app
var app = express();


app.use(bodyParser.json());

// initialize routes
app.use('/api', routes);

// listen for requests
app.listen(process.env.port || 4000, function() {
  console.log("listening for the requests");
});