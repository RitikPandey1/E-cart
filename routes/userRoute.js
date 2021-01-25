const express = require("express");
const {
  signUp,
  login,
  updateUser,
  protectFirewall,
  updatePassword,
  getUser
} = require("../controller/UserAuth");
const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.use(protectFirewall);
router.post("/updatepassword", updatePassword);
router.get("/user", getUser); 
router.post("/updateuser",updateUser);

module.exports = router;
