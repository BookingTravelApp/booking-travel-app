const express = require("express");
const Tag = require("../model/Tag");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const listTag = await Tag.findAll();
    res.json({ success: true, listTag });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  const { tag_name, description } = req.body;
  try {
    if (!tag_name || tag_name == "") {
      return res
        .status(404)
        .json({ success: false, message: "Require tag name" });
    }
    const newTag = new Tag({
      tag_name,
      description: description || "",
    });
    newTag.save();
    res.json({ success: true, message: "Created tag successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.put("/", async (req, res) => {
  const { id, tag_name, description } = req.body;
  try {
    const oldTag = Tag.findOne({ where: { id } });
    if (!oldTag) {
      return res
        .status(404)
        .json({ success: false, message: "Tag is not exist" });
    }
    await Tag.update(
      {
        tag_name: tag_name || oldTag.tag_name,
        description: description || oldTag.description,
      },
      { where: { id } }
    );
    return res.json({ success: true, message: "Updated tag successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const oldTag = Tag.findOne({ where: { id: req.params.id } });
    if (!oldTag) {
      return res
        .status(404)
        .json({ success: false, message: "Tag is not exist" });
    }
    await Tag.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: "Deleted tag successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
