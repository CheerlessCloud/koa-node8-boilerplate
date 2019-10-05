import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import routes from './routes';
import requestLoggingMiddleware from './middlewares/request-logging';
import lastFrontierKoaErrorHandler from './middlewares/error-handler';

const app = new Koa();

// If you app running behind proxy (nginx, apache, etc.)
app.proxy = true;
// Because we use custom error handler
// we don't need to output error to stderr
// https://github.com/koajs/koa/blob/master/docs/api/index.md#error-handling
app.silent = false;

app.use(requestLoggingMiddleware);

app.use(bodyParser());

app.use(routes.routes()).use(routes.allowedMethods());

app.on('error', lastFrontierKoaErrorHandler);

export default app;
