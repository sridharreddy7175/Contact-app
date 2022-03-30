var express = require("express");
var router = express.Router();

var { signup, signin, forgotpassword, changepassword } = require("../controlers/user");

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgotpasword", forgotpassword)
router.put("/changepasword", changepassword)


module.exports = router;
