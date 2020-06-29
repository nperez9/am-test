const mongoose = require('mongoose');
const hotelSchema = require('./hotelSchema');

mongoose.model('hotels', hotelSchema, 'hotels');

