import express from "express";

import verifyuser from "../middleware/authenticate";
import addToCart from "../Controllers/cartController";

const CartRouter=express.Router();

CartRouter.post("/add",verifyuser,addToCart);
