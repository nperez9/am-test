const config = require('./config/config');
const setapp = require('./config/express');
// App Core
const express = require('express');
const app = setapp(express());

const mongoose = require('mongoose');
const bluebird = require('bluebird');

// Db Conecction
try {
	mongoose.Promise = bluebird;
	mongoose.connect(config.db, { useNewUrlParser: true });
} catch (e) {
	console.log('No se pudo conectar a la base de datos \r\n');
	console.log(e);
	process.exit(1);
}

// Loads Models in the memory Buffer
require('./src/schemas/modelDeclaration');

const apiRouter = require('./src/apiRouter') (express);

app.use(config.apiPrefix, apiRouter);

app.listen(config.port);

console.log('Express listening in port ' + config.port);