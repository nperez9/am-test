const mongoose = require('mongoose');
const errorResponse = require('../../helpers/errorResponseHelper');
const hotelModel = mongoose.model('hotels');

/**
 * Hotels Search Method, filter by queryString
 * @param {object} req - Express Request
 * @param {object} res - Express Response
 */
function search (req, res) {
  let filter = filterGenerartor(req.query);

  hotelModel.find(filter.query)
  .limit(filter.limit)
  .skip(filter.skip)
  .exec((err, hotels) => {
    if (err) return errorResponse(err, res);
    
    return res.json(hotels);
  });
}

/**
 * Generate the complete filter for hotels query
 * @param {object} params - queryString params
 * @returns {object} filter - Clean filter
 */
function filterGenerartor (params) {
  let filter = {
    limit: 20,
    page: 1,
    skip: 0,
    query: {}
  };
  
  if (!params) return filter;

  if (params.limit)
    filter.limit = params.limit;
  if (params.page) {
    filter.page = params.page;
    filter.skip = (params.page - 1) * filter.limit;
  }
  if (params.name)
    filter.query.name = new RegExp(params.name, 'i');
  if (params.stars)
    filter.query.stars = {$in: params.stars.split(',')};

  return filter;
}


module.exports = search;