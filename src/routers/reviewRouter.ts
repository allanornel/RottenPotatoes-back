import { Router } from "express";
import { postReview } from "../controllers/reviewController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { reviewSchema } from "../schemas/reviewSchema.js";

const reviewRouter = Router();

reviewRouter.use(validateToken);
reviewRouter.post("/review/:id", validateSchema(reviewSchema), postReview);

export default reviewRouter;
