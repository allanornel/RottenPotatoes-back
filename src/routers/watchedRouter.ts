import { Router } from "express";
import { postWatched } from "../controllers/watchedController.js";
import { validateToken } from "../middlewares/authMiddleware.js";

const watchedRouter = Router();

watchedRouter.use(validateToken);
watchedRouter.post("/watched/:id", postWatched);

export default watchedRouter;
