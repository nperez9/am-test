const mongoose = require('mongoose');
const errorResponse = require('../../helpers/errorResponseHelper');
const hotelModel = mongoose.model('hotels');

/**
 * Creates one Hotel in the DB
 * @param {object} req 
 * @param {object} res 
 */
function saveHotel (req, res) {
  let hotel = req.body;

  hotelModel.create(hotel, (err, result) => {
    if (err) return errorResponse(err, res);

    return res.json({
      success: true,
      message: "Hotel creado con exito"
    });
  });
}

module.exports = saveHotel;