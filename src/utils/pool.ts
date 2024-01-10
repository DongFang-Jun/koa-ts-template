import { DATABASE, ENV } from "../config/constant";
import { logger } from "../log/log";
import { Sequelize } from "sequelize";

const { dbName, user, password, host, port } =
  process.env.NODE_ENV === ENV.production
    ? DATABASE.production
    : DATABASE.development;

const sequelize = new Sequelize(dbName, user, password, {
  dialect: "mysql",
  host: host,
  port: port,
  timezone: "+08:00",
  logging: false,
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
  },
  // query: {
  //     raw: true
  // },
  define: {
    timestamps: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    // 把驼峰命名转换为下划线
    underscored: true,
  },
});

// 同步模型
sequelize
  .sync({ force: false, alter: true })
  .then((res) => {})
  .catch((err) => {
    logger.error("模型同步失败");
  });

sequelize
  .authenticate()
  .then(() => {})
  .catch((err: Error) => {
    logger.error(err.message);
  });

export default sequelize;
