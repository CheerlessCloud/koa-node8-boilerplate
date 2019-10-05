import logger from '../../libs/logger';

export default async function requestLoggingMiddleware(ctx, next) {
  await next();
  logger.trace({ req: ctx.request, res: ctx.response });
}
