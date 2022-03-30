var express = require("express");
var router = express.Router();

var {
    createcontact,
    contactlist

} = require("../controlers/addContact");

router.post("/createcontact", createcontact);
router.post("/contactlist", contactlist);


module.exports = router;
