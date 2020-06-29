const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
let env = 'development';

try {
  env = require('./env.js');
} 
catch (e) {
  console.log('Enviroment file (env.js) could not be load, loads development config');
  env = 'development';
}
console.log('------------------------------------');
console.log(env, ' Load!');
console.log('------------------------------------');
const config = {
  development: {
    backUrl: 'http://localhost:4000',// base Server URL
    frontUrl: 'http://localhost:4000', // base front URL  
    apiPrefix: '/api/', // base_api URL  
    root: rootPath, 
    publicPath: '../public/', // Route of the public folder
    app: {
      name: 'Almundo dev' // app name
    },
    port: 4000, // Node port
    db: 'mongodb://127.0.0.1:9000/almundo_dev' // database String Conecction
  },
  production: {
    frontUrl: 'http://localhost:4000', // base front URL  
    apiPrefix: '/api/', // base_api URL  
    root: rootPath, 
    publicPath: '../public/',
    app: {
      name: 'Almundo dev'
    },
    port: 4000,
    db: 'mongodb://127.0.0.1:27017/almundo_dev'
  }
};

module.exports = config[env];
