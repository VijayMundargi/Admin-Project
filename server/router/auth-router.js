const express = require('express');
const router = express.Router();
const authCOntroller = require("../controllers/auth-controller")


router.route("/").get(authCOntroller.home)

router.route("/register").post(authCOntroller.register)

module.exports = router;