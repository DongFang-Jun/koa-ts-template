import Koa from "koa";
import http from "http";
import koaBody from "koa-body";
import { getIpAddress } from "./utils/util";
import { loggerMiddleware } from "./log/log";
import { FIXED_KEY } from "./config/constant";
import { privateRouter, publicRouter, openRouter } from "./router";
import { errorHandler, responseHandler } from "./middleware/response";

const app = new Koa();
// log middleware
app.use(loggerMiddleware);

// Error Handler
app.use(errorHandler);

// Global middleware
app.use(koaBody({ multipart: true }));

// Routes
app.use(publicRouter.routes()).use(publicRouter.allowedMethods()); // 公共路由
app.use(privateRouter.routes()).use(privateRouter.allowedMethods()); // 权限路由
app.use(openRouter.routes()).use(openRouter.allowedMethods()); // 公开路由

// Response
app.use(responseHandler);

const port = FIXED_KEY.port;

const server = http.createServer(app.callback());

server.listen(port);

server.on("error", (err: Error) => {
  console.log(err);
});

server.on("listening", () => {
  const ip = getIpAddress();
  const address = `http://${ip}:${port}`;
  const localAddress = `http://localhost:${port}`;
  console.log(`app started at address \n\n${localAddress}\n\n${address}`);
});
