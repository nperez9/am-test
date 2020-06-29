
const hotels = require('./modules/hotels');

function apiRouter (express) {
  const router = express.Router();

  //Hotels routes
  router.get('/hotels', hotels.search);
  router.post('/hotels', hotels.save);
  router.put('/hotels', hotels.edit);
  router.delete('/hotels/:id', hotels.remove);

  return router;
}

module.exports = apiRouter;