const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const { Role } = require("../model");
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
    await Role.create({
      role,
      description,
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
module.exports = router;
