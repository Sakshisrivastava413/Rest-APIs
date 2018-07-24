const express = require('express');
const Ninja = require('../models/ninja')

const router = express.Router();


// to get list of ninjas from the db
router.get('/ninjas', function (req, res) {
  res.send({ type: "GET" });
});


// to add new ninjas in the db
router.post('/ninjas', function(req, res){
  Ninja.create(req.body).then(function(ninja){
      res.send(ninja);
  });
});


// to update a particular ninjas details in the db
router.put('/ninjas/:id', function (req, res) {
  res.send({ type: "PUT" });
});


// to delete a particular ninjas from the db
router.delete('/ninjas/:id', function (req, res) {
  res.send({ type: "DELETE" });
});

// exporting this file
module.exports = router;