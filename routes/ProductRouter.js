import express from "express";
import {getAllProducts,addProduct,deleteProduct} from "../Controllers/productController.js";
import verifyadmin from "../middleware/admin.js";

const ProductRouter=express.Router();

ProductRouter.get("/",getAllProducts);
ProductRouter.post("/",verifyadmin,addProduct);
ProductRouter.delete("/:id",verifyadmin,deleteProduct);
