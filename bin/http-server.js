import httpServer from '../src/http-server';
import conf from '../config';
import logger from '../src/libs/logger';

httpServer.listen(conf.get('httpPort'));

logger.info({
  message: 'HTTP server successfully ran',
  port: conf.get('httpPort'),
});
