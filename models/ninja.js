const mongoose = require('mongoose');
const Schema = require('Schema');

// create ninja schema and models
const ninjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"]
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
});