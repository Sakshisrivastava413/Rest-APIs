var express = require('express');

// setup express app
var app = express();


// listen for requests
app.listen(process.env.port || 4000, function() {
  console.log("listening for the requests");
});