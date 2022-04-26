const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verify-token");
const Event = require("../model/Event");

router.get("/", async (req, res) => {
  try {
    const listEvent = await Event.findAll();
    return res.json({ success: true, listEvent });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
router.post("/", async (req, res) => {
  const { event_name, description, discount, startAt, endAt, isActive } =
    req.body;
  try {
    const newEvent = new Event({
      event_name,
      description: description || "",
      discount,
      startAt,
      endAt,
      isActive: isActive || true,
    });
    await newEvent.save();
    return res.json({
      success: true,
      message: "Event created successful",
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
  const { id, event_name, description, discount, startAt, endAt, isActive } =
    req.body;
  try {
    let oldEvent = await Event.findOne({ where: { id } });
    await Event.update(
      {
        event_name: event_name || oldEvent.event_name,
        description: description || oldEvent.description,
        discount: discount || oldEvent.discount,
        startAt: startAt || oldEvent.startAt,
        endAt: endAt || oldEvent.endAt,
        isActive: isActive || oldEvent.isActive,
      },
      { where: { id } }
    );
    return res.json({
      success: true,
      message: "Event update successfully",
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
    await Event.destroy({ where: { id: req.params.id } });
    return res.json({
      success: true,
      message: "Delete event successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: true, message: "Internal server error" });
  }
});

module.exports = router;
