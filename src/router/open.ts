import controllers from "../controllers";
import koaRouter from "koa-router";
const router = new koaRouter();

const platform = "/game";

const service = {
  global: "",
  user: "/user",
};


router.post(
  `${platform}${service.user}/test`,
  controllers.app_user.testApi,
);

export default router;
