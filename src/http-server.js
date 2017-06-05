const Koa = require('koa');
const routes = require('./routes');
const config = require('./../config');
const logger = require('./libs/logger');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

// If you app runnig after proxy (nginx, apache, etc.)
app.proxy = true;
// Because we use custom error handler
// we don't need to output error to stderr
// https://github.com/koajs/koa/blob/master/docs/api/index.md#error-handling
app.silent = false;

// logging requests only in development mode,
// because this may generate very-very big logs on production
if (config.get('isDevelopment')) {
  app.use(async (ctx, next) => {
    await next();
    logger.info({ req: ctx.request });
  });
}

// enable parsing request body
app.use(bodyParser());

app
  .use(routes.routes())
  .use(routes.allowedMethods());

app.on('error', (err, ctx) => {
  logger.error({ err, req: ctx.req });
});

module.exports = app;
