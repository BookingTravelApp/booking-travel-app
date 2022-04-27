const express = require("express");
const router = express.Router();
const { Role, RolePermissions, RoleAccounts } = require("../model");
const { post } = require("./auth");

router.get("/", async (req, res) => {
  try {
    const listRole = await Role.findAll();
    res.json({
      success: true,
      listRole,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
});

router.post("/", async (req, res) => {
  const { role, description } = req.body;
  try {
    if (role == "")
      return res.json({ success: false, message: "Role require name" });
    await Role.create({
      role,
      description: description || "",
    });
    res.json({
      success: true,
      message: "created role successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});
router.put("/", async (req, res) => {
  const { id, role, description } = req.body;
  try {
    let oldRole = Role.findOne({ where: { id } });
    if (!oldRole)
      return res.json({ success: false, message: "Role is not exist" });
    await Role.update(
      {
        role: role || oldRole.role,
        description: description || oldRole.description,
      },
      { where: { id } }
    );
    res.json({ success: true, message: "Updated role successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
router.delete("/:id", async (req, res) => {
  const deleteRole = Role.findOne({ where: { id: req.params.id } });
  try {
    if (!deleteRole)
      return res
        .status(404)
        .json({ success: false, message: "Role not found" });
    await RolePermissions.destroy({ where: { roleId: req.params.id } });
    await RoleAccounts.destroy({ where: { roleId: req.params.id } });
    await Role.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: "Deleted role successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
module.exports = router;
