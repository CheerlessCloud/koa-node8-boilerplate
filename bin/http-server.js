import gracefulShutdownMixin from 'http-shutdown';
import httpServerApp from '../src/http/server';
import conf from '../config';
import logger from '../src/libs/logger';

function onListen() {
  logger.info({
    message: 'HTTP server successfully ran',
    port: conf.get('httpPort'),
  });
}

const nativeHttpServer = httpServerApp.listen(conf.get('httpPort'), onListen);
const serverWithShutdown = gracefulShutdownMixin(nativeHttpServer);

process.on('SIGINT', () => {
  logger.info({ message: 'Start shutdown http server' });

  const shutdownCallback = err => {
    if (err) {
      logger.error(err);
      process.exit(1);
    }

    process.exit(0);
  };

  const timer = setTimeout(() => {
    logger.warn({ message: 'Force shutdown http server by timeout' });
    serverWithShutdown.forceShutdown(err => shutdownCallback(err));
  }, conf.get('gracefulStopTimeout'));

  serverWithShutdown.shutdown(err => {
    clearTimeout(timer);
    shutdownCallback(err);
  });
});
