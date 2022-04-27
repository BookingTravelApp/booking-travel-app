const express = require("express");
const router = express.Router();
const { Permission } = require("../model");
router.get("/", async (req, res) => {
  try {
    const listPermission = await Permission.findAll();
    res.json({ success: true, listPermission });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
router.post("/", async (req, res) => {
  const { name, action, description } = req.body;
  try {
    if (!name)
      return res
        .status(404)
        .json({ success: false, message: "Require permission name" });
    const newPermission = new Permission({
      name,
      action: action || "",
      description: description || "",
    });
    newPermission.save();
    res.json({ success: true, message: "Created permission successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, mess });
  }
});
router.put("/", async (req, res) => {
  const { id, name, action, description } = req.body;
  try {
    const oldPermission = Permission.findOne({ where: { id } });
    if (!oldPermission)
      return res.json({ success: false, message: "Permission is not exist" });
    await Permission.update(
      {
        name: name || oldPermission.name,
        description: description || oldPermission.description,
        action: action || oldPermission.action,
      },
      { where: { id: id } }
    );
    return res.json({
      success: true,
      message: "Updated permission successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const oldPermission = await Permission.findOne({
      where: { id: req.params.id },
    });
    if (!oldPermission)
      return res.json({ success: false, message: "Permission is not exist" });
    await Permission.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: "Permission deleted successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
module.exports = router;
