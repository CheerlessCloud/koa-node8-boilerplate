import logger from '../../libs/logger';

export default function lastFrontierKoaErrorHandler(error, ctx) {
  if (!ctx.status) {
    ctx.status = 500;
  }

  logger.error({
    error,
    req: ctx.request,
    res: ctx.res,
  });
}
