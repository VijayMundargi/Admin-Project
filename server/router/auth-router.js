const express = require('express');
const router = express.Router();
const authCOntroller = require("../controllers/auth-controller")
const { signupSchema, loginSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware")


router.route("/register").post(validate(signupSchema),authCOntroller.register)
router.route("/login").post(validate(loginSchema),authCOntroller.login)

module.exports = router;