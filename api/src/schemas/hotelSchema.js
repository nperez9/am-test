const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  "id": {
    type: String,
    index: true,
    unique: true
  },
  "name": String,
  "stars": Number,
  "price": Number,
  "image": String,
  "amenities": [String]
});

module.exports = hotelSchema;