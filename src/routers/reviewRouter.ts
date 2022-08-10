import { Router } from "express";
import { postReview } from "../controllers/reviewController.js";
import { validateToken } from "../middlewares/authMiddleware.js";

const reviewRouter = Router();

reviewRouter.use(validateToken);
reviewRouter.post("/review/:id", postReview);

export default reviewRouter;
