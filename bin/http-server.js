import config from 'config';
import httpServer from '../src/http-server';
import logger from '../src/libs/logger';

httpServer.listen(config.get('port'));

logger.info({
	message: 'HTTP server successfully run',
	port: config.get('port'),
});
