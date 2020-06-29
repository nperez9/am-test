const mongoose = require('mongoose');
const errorResponse = require('../../helpers/errorResponseHelper');
const hotelModel = mongoose.model('hotels');

/**
 * delete one hotel by id. endponit param /:id
 * @param {object} req 
 * @param {object} res 
 */
function removeHotel (req, res) {
  const id = req.params.id;

  hotelModel.remove({id}, (err, result) => {
    if (err) return errorResponse(err, res);
    return res.json({
      success: true,
      message: "Hotel eliminado con exito"
    })
  });
}

module.exports = removeHotel;