import { Router } from "express";
import { getProduction, getProductionById } from "../controllers/productionController.js";
import { validateToken } from "../middlewares/authMiddleware.js";

const productionRouter = Router();

productionRouter.use(validateToken);
productionRouter.get("/productions", getProduction);
productionRouter.get("/productions/:id", getProductionById);
productionRouter.get("/productions/watched/:id");

export default productionRouter;
