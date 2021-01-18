const express = require("express");
const {
  signUp,
  login,
  logout,
  protectFirewall,
  updatePassword,
} = require("../controller/UserAuth");
const router = express.Router();

router.post("/signup", signUp);
router.get("/logout", logout);
router.post("/login", login);
router.use(protectFirewall);
router.post("/updatepassword", updatePassword);
 

module.exports = router;
