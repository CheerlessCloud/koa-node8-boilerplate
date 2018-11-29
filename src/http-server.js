import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from './libs/logger';
import routes from './routes';

const app = new Koa();

// If you app runnig after proxy (nginx, apache, etc.)
app.proxy = true;
// Because we use custom error handler
// we don't need to output error to stderr
// https://github.com/koajs/koa/blob/master/docs/api/index.md#error-handling
app.silent = false;

// logging requests only in development mode,
// because this may generate very-very big logs on production
if (process.env.NODE_ENV === 'development') {
	app.use(async (ctx, next) => {
		await next();
		logger.info({ req: ctx.request });
	});
}

// enable parsing request body
app.use(bodyParser());

app.use(routes.routes()).use(routes.allowedMethods());

app.on('error', (err, ctx) => {
	if (err.logged || ctx.status >= 500 || process.env.NODE_ENV === 'development') {
		logger.error({
			err,
			req: ctx.req,
			res: ctx.res,
		});
	}
});

export default app;
