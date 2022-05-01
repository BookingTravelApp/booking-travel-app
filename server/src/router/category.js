const express = require("express");
const Category = require("../model/Category");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const listCategory = await Category.findAll();
    res.json({ success: true, listCategory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  const { name, description } = req.body;
  try {
    if (!name || name == "") {
      return res
        .status(404)
        .json({ success: false, message: "Require category name" });
    }
    const newCategory = new Category({
      name,
      description: description || "",
    });
    await newCategory.save();
    res.json({ success: true, message: "Created category successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.put("/", async (req, res) => {
  const { id, name, description } = req.body;
  try {
    const oldCategory = await Category.findOne({ where: { id } });
    if (!oldCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Category is not exist" });
    }
    await Category.update(
      {
        name: name || oldCategory.name,
        description: description || oldCategory.description,
      },
      { where: { id: oldCategory.id } }
    );
    return res.json({ success: true, message: "Updated category successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const oldCategory = await Category.findOne({
      where: { id: req.params.id },
    });
    if (!oldCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Category is not exist" });
    }
    await Category.destroy({ where: { id: req.params.id } });
    res.json({ success: true, message: "Deleted category successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
