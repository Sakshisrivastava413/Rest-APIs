const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja schema and models
const NinjaSchema = new Schema({
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
  // add geolocation
});

const Ninja = mongoose.model('ninja', NinjaSchema);
module.exports = Ninja;