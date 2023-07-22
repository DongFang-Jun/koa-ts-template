import koaRouter from 'koa-router'
import controllers from '../controllers'
import { jwtMiddlewareDeal } from '../middleware/jwt'

const router = new koaRouter()

router.use(jwtMiddlewareDeal)

router.get('/test', controllers.test_test.testApi) //测试api

export default router
