import express from "express";
const router = express.Router();
import { getProduct,getProductById } from "../controller/productController.js";
router.get(
  "/",

);
router.get(
  "/:id",
);

export default router;
