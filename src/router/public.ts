import controllers from "../controllers";
import koaRouter from "koa-router";
import { platformMiddlewareDeal } from "../middleware/jwt";

const router = new koaRouter();

router.use(platformMiddlewareDeal);

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
