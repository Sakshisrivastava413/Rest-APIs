const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create geolocation schema
const GeolocationSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

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
  },
  geometry: GeolocationSchema
});

const Ninja = mongoose.model('ninja', NinjaSchema);
module.exports = Ninja;