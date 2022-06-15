const express = require("express");
const verifyToken = require("../middleware/verify-token");
const router = express.Router();
const upload = require("../middleware/upload");
const ResourceController = require("../controller/ResourceController");

router.get("/avatar", ResourceController.avatarIndex);

router.post(
  "/avatar",
  verifyToken,
  upload.singleUpload.single("avatar"),
  ResourceController.createAvatar
);

// @router avatar/:filename
// private
router.get("/avatar/:filename", ResourceController.showAvatar);

router.post(
  "/media",
  verifyToken,
  upload.multipleUpload,
  ResourceController.createMedia
);

router.get("/media/:filename", ResourceController.showMedia);

router.delete("/delete/:id", ResourceController.destroy);

module.exports = router;
