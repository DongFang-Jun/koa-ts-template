import AdminUser from '../../../models/adminUser'

// 获取用户信息 - 不返回密码
export const getUserInfoByIdService = (userId: number) => {
  return AdminUser.findOne({ where: { id: userId }, attributes: { exclude: ['password'] } })
}

// 根据账号名-查询用户信息（判断是否重复注册-同一账户名只允许存在一个 || 判断登录密码是否正确）
export const getUserInfoByAccountService = (account: string) => {
  return AdminUser.findOne({ where: { account: account } })
}

// 注册用户-默认权限角色id为1 最低权限
export const registerUserService = (params: { account: string; password: string }) => {
  return AdminUser.create({ ...params, roleId: 1 })
}

// 更新用户信息
export const updateUserInfoService = (updateInfo: { token?: string }, targetUserId: number) => {
  return AdminUser.update(updateInfo, { where: { id: targetUserId } })
}
