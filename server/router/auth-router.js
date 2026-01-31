const express = require('express');
const router = express.Router();
const authCOntroller = require("../controllers/auth-controller")



router.route("/register").post(authCOntroller.register)
router.route("/login").post(authCOntroller.login)

module.exports = router;