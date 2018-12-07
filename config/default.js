const dotEnv = require('dotenv');

dotEnv.config();

module.exports = {
  logger: {
    name: process.env.LOGGER__NAME,
    level: process.env.LOGGER__LEVEL,
  },
  db: {
    uri: process.env.MONGODB__URL,
    reconnectInterval: process.env.MONGODB__RECONNECTING_INTERVAL,
    opts: {
      autoIndex: false,
      poolSize: 20,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: process.env.MONGODB__RECONNECTING_INTERVAL,
      connectTimeoutMS: 30000,
      useNewUrlParser: true,
    },
  },

  port: process.env.HTTP_PORT,
};
