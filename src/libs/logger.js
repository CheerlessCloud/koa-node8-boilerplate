import { resolve } from 'path';
import bunyan from 'bunyan';
import config from '../../config';

const streams = [];

if (!config.get('isProduction')) {
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  const bunyanDebugStream = require('bunyan-debug-stream');
  streams.push({
    level: 'trace',
    type: 'raw',
    stream: bunyanDebugStream({
      basepath: resolve('./../../.'),
      forceColor: true,
    }),
  });
} else {
  streams.push({
    level: config.get('loggerLevel'),
    stream: process.stdout,
  });
}

const logger = bunyan.createLogger({
  streams,
  name: config.get('loggerName'),
  level: config.get('loggerLevel'),
  serializers: {
    req: bunyan.stdSerializers.req,
    res: bunyan.stdSerializers.res,
    err: bunyan.stdSerializers.err,
    error: bunyan.stdSerializers.err,
  },
});

export default logger;
