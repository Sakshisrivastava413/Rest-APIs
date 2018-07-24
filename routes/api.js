const express = require('express');
const Ninja = require('../models/ninja')

const router = express.Router();


// to get list of ninjas from the db
router.get('/ninjas', function (req, res, next) {
  res.send({ type: "GET" });
});


// to add new ninjas in the db
router.post('/ninjas', function (req, res, next) {
  Ninja.create(req.body).then(function (ninja) {
    res.send(ninja);
  }).catch(next);
});


// to update a particular ninjas details in the db
router.put('/ninjas/:id', function (req, res, next) {
  res.send({ type: "PUT" });
});


// to delete a particular ninjas from the db
router.delete('/ninjas/:id', function (req, res, next) {
  // console.log(req.params.id)
  Ninja.findByIdAndRemove({
    _id: req.params.id
  }).then(function (ninja) {
    res.send(ninja);
  })
});

// exporting this file
module.exports = router;