import sequelize from "../utils/pool";
import { Model, DataTypes } from "sequelize";
import dayjs from "dayjs";

class User extends Model {
  declare id: number;
  declare mobile: string;
  declare nickname: string;
  declare avatar: string;
  declare password: string;
  declare platform: string;
  declare payingAmount?: number;
  declare token?: string;
  declare h5OpenId?: string;
  declare wxOpenId?: string;
  declare wxUnionid?: string;
  declare dyOpenId?: string;
  declare ksOpenId?: string;
  declare qqOpenId?: string;
  declare qqUnionid?: string;
  declare lastLogin?: string;
  declare gender?: number;
  declare birth?: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: "主键ID",
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "手机号",
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "昵称",
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "头像",
    },
    birth: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "生日",
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "性别；1男 2女",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "密码",
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
      comment:
        "注册平台：wxMini:微信小程序；h5:webH5；dyMini:抖音小程序；ksMini:快手小程序；qqMini:QQ小程序",
    },
    payingAmount: {
      type: DataTypes.DECIMAL(20, 2),
      allowNull: true,
      defaultValue: 0,
      comment: "总付费金额",
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "token",
    },
    h5OpenId: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "微信H5openid",
    },
    wxOpenId: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "微信小程序openid",
    },
    wxUnionid: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "微信唯一用户标识",
    },
    dyOpenId: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "抖音小程序openid",
    },
    ksOpenId: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "快手小程序openid",
    },
    qqOpenId: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "QQ小程序openid",
    },
    qqUnionid: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "QQ唯一用户标识",
    },
    lastLogin: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      comment: "最后一次登录",
    },
  },
  {
    sequelize,
    modelName: "user",
    freezeTableName: true,
  },
);

export default User;
