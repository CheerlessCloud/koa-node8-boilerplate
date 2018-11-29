import config from 'config';
import httpServer from '../src/http-server';
import logger from '../src/libs/logger';

httpServer.listen(config.get('port'));

logger.info({
	message: 'HTTP server successfully run',
	port: config.get('port'),
});

process.on('uncaughtException', error => {
	logger.error({ error });
	// gracefull shutdown
});

process.on('unhandledRejection', (error, reason) => {
	logger.error({ error, reason });
	// gracefull shutdown
});

process.on('SIGINT', () => {
	if (process.env.NODE_ENV === 'development') {
		process.exit(0);
	}
	// gracefull shutdown
});
