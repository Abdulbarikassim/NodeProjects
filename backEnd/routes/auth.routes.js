import express from "express";
import { signin, signup, logout } from "../controllers/auth.controllers.js";
const router = express.Router();

router.get("/signup", signup);
router.get("/signin", signin);
router.get("/logout", logout);

export default router;
