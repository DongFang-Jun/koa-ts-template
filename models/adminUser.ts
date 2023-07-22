import sequelize from '../utils/pool'
import { Model, DataTypes } from 'sequelize'

class AdminUser extends Model {}

AdminUser.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '主键ID'
    },
    account: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '账号'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '密码'
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '头像'
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '角色id'
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'token'
    }
  },
  {
    sequelize,
    modelName: 'adminUser',
    freezeTableName: true
  }
)

export default AdminUser
