const bodyParser = require('body-parser');

/**
 * Configure Express app 
 * @param {object} app 
 */
function setServer (app) {
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  return app;
}

module.exports = setServer;