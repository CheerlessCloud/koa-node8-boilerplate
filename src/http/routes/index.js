import Router from 'koa-router';

const router = new Router();

router.get('/', async ctx => {
  ctx.body = 'Hello World!';
});

router.get('/throw-error-400', async ctx => {
  ctx.throw(400, 'name required');
});

router.get('/throw-error', async () => {
  throw new Error('Something went wrong');
});

export default router;
