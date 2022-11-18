const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verify-token");
const role = require("../middleware/role");
const TagController = require("../controller/TagController");

router.get("/", TagController.index);

router.post("/", [verifyToken, role.employee], TagController.create);

router.put("/", TagController.update);

router.delete("/:id", [verifyToken, role.employee], TagController.destroy);

module.exports = router;
