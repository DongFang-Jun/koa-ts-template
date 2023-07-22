import { Context, Next } from 'koa'

// 测试api
export const testApi = (ctx: Context, next: Next) => {
  ctx.body = {
    userId: ctx.userId,
    userInfo: ctx.userInfo
  }
  return next()
}
