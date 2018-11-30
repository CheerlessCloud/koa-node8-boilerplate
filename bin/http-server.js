import config from 'config';
import mongoose from 'mongoose';
import httpServer from '../src/http-server';
import logger from '../src/libs/logger';

(async () => {
	await mongoose.connect(
		config.get('db.uri'),
		config.get('db.opts'),
	);
	httpServer.listen(config.get('port'), () => {
		logger.info({
			message: 'listen port',
			port: config.get('port'),
		});
	});
})().catch(error => {
	logger.error({
		message: 'fatal error',
		error,
	});

	setTimeout(() => {
		process.exit(1);
	}, 1000);
});

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
