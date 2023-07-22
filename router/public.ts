import controllers from '../controllers'
import koaRouter from 'koa-router'

const router = new koaRouter()

const project = {
  admin: '/admin'
}

router.post(project.admin + '/user/register', controllers.admin_user_user.registerUserApi) // 注册用户

router.post(project.admin + '/user/login', controllers.admin_user_user.userLoginApi) // 用户登录

router.post(project.admin + '/user/updatePassword', controllers.admin_user_user.updatePasswordApi) // 忘记密码=>修改密码

router.post(project.admin + '/user/delete', controllers.admin_user_user.deleteUserApi) // 删除用户

export default router
