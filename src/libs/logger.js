import bunyan from 'bunyan';
import config from 'config';

const streams = [];

if (process.env.NODE_ENV === 'development') {
	// eslint-disable-next-line global-require, import/no-extraneous-dependencies
	const StdoutStream = require('bunyan-stdout-stream').default;
	streams.push({
		level: 'trace',
		type: 'raw',
		stream: new StdoutStream({ maxDepth: 10 }),
	});
} else {
	streams.push({
		level: config.get('logger.level'),
		stream: process.stdout,
	});
}

const logger = bunyan.createLogger({
	streams,
	name: config.get('logger.name'),
	level: config.get('logger.level'),
	serializers: {
		req: bunyan.stdSerializers.req,
		res: bunyan.stdSerializers.res,
		err: bunyan.stdSerializers.err,
		error: bunyan.stdSerializers.err,
	},
});

export default logger;
