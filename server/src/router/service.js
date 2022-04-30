const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verify-token");
const { Service, Rate, User } = require("../model");

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

//@Relationship
//@Rate
router.get("/rate/:id", async (req, res) => {
  try {
    const listRate = await Rate.findAll(
      { include: [{ model: User }] },
      {
        where: { serviceId: req.params.id },
      }
    );
    res.json({ success: true, listRate });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.post("/rate", async (req, res) => {
  const { quality, userId, serviceId } = req.body;
  try {
    if (parseInt(quality) < 1 || parseInt(quality) > 5)
      return res.json({ success: false, message: "Invalid quality" });
    const user = User.findOne({ where: { id: userId } });
    const service = Service.findOne({ where: { id: serviceId } });
    if (!user || !service)
      return res
        .status(404)
        .json({ success: false, message: "User or service is not exist" });
    const rate = await Rate.findOne({ where: { userId, serviceId } });
    if (!rate) {
      const newRate = new Rate({
        quality: "",
        userId,
        serviceId,
      });
      await newRate.save();
    } else {
      if (rate.quality == quality)
        await Rate.destroy({ where: { id: rate.id } });
      else
        await Rate.update(
          {
            quality,
          },
          { where: { id: rate.id } }
        );
    }
    res.json({ success: true, message: "Updated rate" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
