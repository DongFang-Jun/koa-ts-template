import koaRouter from "koa-router";
import controllers from "../controllers";
import { jwtMiddlewareDeal, platformMiddlewareDeal } from "../middleware/jwt";

const router = new koaRouter();

router.use(platformMiddlewareDeal);
router.use(jwtMiddlewareDeal);

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
