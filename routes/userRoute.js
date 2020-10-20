const express = require("express");
const { signUp,login, logout,protectFirewall } = require("../controller/UserAuth");
const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.get("/logout", logout);


router.use(protectFirewall);

router.get("/someinfo", (req, res) => {
    res.write("hurray you got it !!");
    res.end();
});

module.exports = router;
