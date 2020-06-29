/**
 * Function to return a bad response.
 * @param {any} err - Error generated
 * @param {object} res - Express response object
 * @param {string} [message] - Front error message
 */
function errorResponse (err, res, message) {
  console.error(err);
  let respMessage = 'Server Error';

  if (typeof message === 'string')
    respMessage = message;

  return res.status(500).json({
    success: false,
    message: respMessage
  });
}

module.exports = errorResponse;