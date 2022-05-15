const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verify-token");
const role = require("../middleware/role");
const UserController = require("../controller/UserController");

router.get("/", [verifyToken, role.employee], UserController.index);
router.get("/get-user/:slug", UserController.show);
router.put("/", verifyToken, UserController.update);

//@Relationship
//Cart
router.get("/cart", verifyToken, UserController.getCart);
router.post("/cart", verifyToken, UserController.createCart);
module.exports = router;
