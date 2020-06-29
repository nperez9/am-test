const mongoose = require('mongoose');
const errorResponse = require('../../helpers/errorResponseHelper');
const hotelModel = mongoose.model('hotels');

/**
 * Edit one Hotel in the DB
 * @param {object} req 
 * @param {object} res 
 */
function editHotel (req, res) {
  let hotel = req.body;
  let id = hotel.id;
  delete hotel.id;

  hotelModel.findOneAndUpdate(
    {id}, 
    {$set: hotel},
    (err, result) => {
      if (err) return errorResponse(err, res);

      return res.json({
        success: true,
        message: "Hotel editado con exito"
      });
  });
}

module.exports = editHotel;