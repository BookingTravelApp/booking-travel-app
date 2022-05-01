const express = require("express");
const { User } = require("../model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const listUser = await User.findAll({
      attributes: { exclude: ["accountId"] },
    });
    res.json({ success: true, listUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
router.put("/", async (req, res) => {
  const { id, phone_number, gender, date_of_birth, active, avatar_path } =
    req.body;
  try {
    const oldUser = await User.findOne({ where: { id } });
    if (!oldUser)
      return res.json({ success: false, message: "User is not exist" });
    await User.update(
      {
        phone_number: phone_number || oldUser.phone_number,
        gender: gender || oldUser.gender,
        date_of_birth: date_of_birth || oldUser.date_of_birth,
        active: active || oldUser.active,
        avatar_path: avatar_path || oldUser.avatar_path,
      },
      { where: { id } }
    );
    res.json({ success: true, message: "Updated user successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
module.exports = router;
