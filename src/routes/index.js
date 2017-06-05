import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = 'Hello World!';
});

router.get('/throw-error', async (ctx) => {
  ctx.throw(400, 'name required');
});

export default router;
