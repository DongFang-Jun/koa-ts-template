import { Context, Next } from 'koa'
import { CODE } from '../../../config/code'
import {
  getUserInfoByAccountService,
  getUserInfoByIdService,
  registerUserService,
  updateUserInfoService
} from '../../../services/admin/user/user'
import { generatorToken } from '../../../utils/util'

// 注册用户
export const registerUserApi = async (ctx: Context, next: Next) => {
  let { account, password } = ctx.request.body || {}
  if (!account || !password) {
    throw CODE.missingParameters
  }

  let accountExistInfo = await getUserInfoByAccountService(account)

  if (accountExistInfo) throw CODE.adminUserIsExist

  let registerInfo = await registerUserService({ account, password })

  ctx.body = registerInfo.dataValues

  return next()
}

// 用户登录
export const userLoginApi = async (ctx: Context, next: Next) => {
  let { account, password } = ctx.request.body || {}
  if (!account || !password) throw CODE.missingParameters

  let accountInfo = await getUserInfoByAccountService(account)
  if (!accountInfo) throw '账号不存在'
  if (accountInfo.dataValues.password !== String(password)) throw '账号密码错误'

  const userId = accountInfo.dataValues.id

  let token = generatorToken(userId)

  await updateUserInfoService({ token }, userId)

  let realUserInfo = await getUserInfoByIdService(userId)

  ctx.body = realUserInfo?.dataValues

  return next()
}

// 忘记密码=>修改密码
export const updatePasswordApi = async (ctx: Context, next: Next) => {
  return next()
}

// 删除用户
export const deleteUserApi = (ctx: Context, next: Next) => {
  return next()
}
