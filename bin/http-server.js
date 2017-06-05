const httpServer = require('./../src/http-server');
const conf = require('./../config');

httpServer.listen(conf.get('httpPort'));
