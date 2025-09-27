import express from "express";

import {login, registerUser} from "../Controllers/User.js";

const UserRouter=express.Router();

UserRouter.post("/login",login);
UserRouter.post("/register",registerUser);
