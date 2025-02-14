import { Router } from "express";
import { createProduct, getProducts } from "../controllers/productsController";

const router = Router();

router.get("/",getProducts); // http://localhost:8000/dashboard
router.post("/",createProduct); 

export default router;