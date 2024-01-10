import {Context, Next} from "koa"

export const testApi = async (ctx: Context, next: Next) => {
    ctx.body = 'success'
    return next()
}