const express = require("express");
const router = express.Router();
const validator = require("../middleware/validator");
const role = require("../middleware/role");
const verifyToken = require("../middleware/verify-token");
const AuthController = require("../controller/AuthController");

router.get("/", [verifyToken, role.admin], AuthController.index);

// @router POST /register
// @public access
router.post("/register", validator.register(), AuthController.create);

// @router POST /login
// @access public
router.post("/login", AuthController.login);

module.exports = router;
