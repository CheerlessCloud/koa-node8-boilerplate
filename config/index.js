const hostname = require('os').hostname();
const TwConf = require('twconf');

const config = new TwConf({
  nodeEnv: {
    comment: 'Run enviroment type',
    type: new TwConf.Types.StringType({
      allowed: ['development', 'test', 'production'],
    }),
    default: 'development',
    splitter: val => ({
      nodeEnv: val,
      isDevelopment: val === 'development',
      isTesting: val === 'test',
      isProduction: val === 'production',
    }),
  },
  loggerName: {
    comment: 'Bunyan logger name',
    type: new TwConf.Types.StringType(),
    default: `http-server-${hostname}`,
  },
  loggerLevel: {
    comment: 'Bunyan log level',
    type: new TwConf.Types.StringType({
      allowed: ['fatal', 'error', 'warn', 'info', 'debug', 'trace'],
    }),
    default: 'warn',
  },
  httpPort: {
    comment: 'Port for HTTP server',
    type: new TwConf.Types.IntType(0, 65535),
    default: 3000,
  },
});

module.exports = config;
