import { Router } from "express";
import authRouter from "./authRouter.js";
import productionRouter from "./productionsRouter.js";

const router = Router();

router.use(authRouter);
router.use(productionRouter);

export default router;
