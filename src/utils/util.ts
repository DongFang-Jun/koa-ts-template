import { Context } from "vm";
import { JWT } from "../config/constant";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { snowflakeIdv1 } from "./snowId";

const snowGenerator = new snowflakeIdv1({ workerId: 1 });

/*获取当前ip地址*/
export const getIpAddress = () => {
  const interfaces = require("os").networkInterfaces();
  for (const devName in interfaces) {
    const temp = interfaces[devName];
    for (let i = 0; i < temp.length; i++) {
      const alias = temp[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      ) {
        return alias.address;
      }
    }
  }
};

// 获取客户端ip地址
export const getClientIpAddress = (ctx: Context) => {
  const headers = ctx.headers;

  if (headers["x-forwarded-for"]) {
    const ipList = headers["x-forwarded-for"].split(",");
    return ipList[0];
  }

  return "0.0.0.0";
};

// 通过token解析userId
export const decodeToken = (token: string) => {
  let jwtInfo = jwt.verify(token, JWT.secret) as any;
  try {
    return jwtInfo.userId;
  } catch (err) {
    return "token不合法";
  }
};

// 根据userId生成token
export const generatorToken = (userId: number) => {
  return jwt.sign({ userId }, JWT.secret, { expiresIn: JWT.expires });
};

// 判断是否为邮箱
export const validateEmail = (email: string) => {
  const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  return reg.test(email);
};

// 判断是否为手机号
export const validateMobile = (mobile: string) => {
  const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
  return reg.test(mobile);
};

// 加密sha1
export const cryptoSha1 = (str: string) => {
  return crypto.createHash("sha1").update(str).digest("hex");
};

// 加密md5
export const cryptoMd5 = (str: string) => {
  return crypto.createHash("md5").update(str).digest("hex");
};

// 生成随机长度数字
export const createRandomNumber = (e = 6) => {
  const t = "0123456789";
  let a = t.length;
  let n = "";
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
};

// 生成随机长度字符串
export const createRandomString = (len = 16) => {
  const t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  const a = t.length;
  let n = "";
  for (let i = 0; i < len; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
};

// 生成雪花id
export const createSnowId = () => {
  // 生成雪花ID
  return snowGenerator.NextId();
};
