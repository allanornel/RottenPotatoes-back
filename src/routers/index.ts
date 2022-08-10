import { Router } from "express";
import authRouter from "./authRouter.js";
import productionRouter from "./productionsRouter.js";
import reviewRouter from "./reviewRouter.js";
import watchedRouter from "./watchedRouter.js";

const router = Router();

router.use(authRouter);
router.use(productionRouter);
router.use(watchedRouter);
router.use(reviewRouter);

export default router;
