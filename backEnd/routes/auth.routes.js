import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("sign up page");
});
router.get("/signin", (req, res) => {
  res.send("sign in page");
});
router.get("/logout", (req, res) => {
  res.send("log out page");
});
export default router;
