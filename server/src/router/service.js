const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verify-token");
const { Service } = require("../model");

router.get("/", verifyToken, async (req, res) => {
  try {
    const listService = await Service.findAll();
    res.json({ success: true, listService });
  } catch (error) {
    res.json({ success: false, message: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const service = await Service.findOne({ where: { id: req.params.id } });
    res.json({ success: true, service });
  } catch (error) {
    res.json({ success: false, message: "Internal server error" });
  }
});

router.post("/", (req, res) => {
  const { service_name, description, price, is_active } = req.body;

  try {
    const newService = new Service({
      service_name,
      description: description || "",
      price: price || 0,
      is_active: is_active || true,
    });
    newService.save();
    return res.json({
      success: true,
      message: "Service created successfully",
      newService,
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
  const { id, service_name, description, price, is_active } = req.body;

  try {
    let oldService = await Service.findOne({ where: { id } });
    await Service.update(
      {
        service_name: service_name || oldService.service_name,
        description: description || oldService.description,
        price: price || oldService.price,
        is_active: is_active || oldService.is_active,
      },
      { where: { id } }
    );
    return res.json({
      success: true,
      message: "Service updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let service = await Service.destroy({ where: { id: req.params.id } });
    return res.json({
      success: true,
      message: "Deleted service successful",
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
