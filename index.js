var express = require('express');
var routes = require('./routes/api')

// setup express app
var app = express();

app.use(routes);

// listen for requests
app.listen(process.env.port || 4000, function() {
  console.log("listening for the requests");
});