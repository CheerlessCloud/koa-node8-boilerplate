import Router from 'koa-router';

/**
 * @param {Mongoose} mongoose
 * @return {Router}
 */
// eslint-disable-next-line no-unused-vars
const createRoutes = mongoose => {
	const router = new Router();

	router.get('/', async ctx => {
		ctx.body = 'Hello World!';
	});

	router.get('/throw-error', async ctx => {
		ctx.throw(400, 'name required');
	});

	return router;
};

export default createRoutes;
