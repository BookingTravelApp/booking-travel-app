const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const { Service, Rate, User, Category } = require("../model");

module.exports = {
  index: async (req, res) => {
    try {
      const listService = await Service.findAll();
      res.json({ success: true, listService });
    } catch (error) {
      res.json({ success: false, message: "Internal server error" });
    }
  },
  show: async (req, res) => {
    try {
      const service = await Service.findOne({
        where: { slug: req.params.slug },
      });
      res.json({ success: true, service });
    } catch (error) {
      res.json({ success: false, message: "Internal server error" });
    }
  },
  create: async (req, res) => {
    const { name, description, price, is_active, categoryId } = req.body;

    try {
      if (!name)
        return res.json({ success: false, message: "Require service name" });
      if (!categoryId)
        return res.json({ success: false, message: "Require category" });
      const category = await Category.findOne({ where: { id: categoryId } });
      if (!category)
        return res
          .status(404)
          .json({ success: false, message: "Category does not exist" });

      const newService = new Service({
        name,
        description: description || "",
        price: price || 0,
        is_active: is_active || true,
        categoryId,
      });
      await newService.save();
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
  },
  update: async (req, res) => {
    const { id, name, description, price, is_active, categoryId } = req.body;

    try {
      if (!id)
        return res.json({ success: false, message: "Service id not found" });
      let oldService = await Service.findOne({ where: { id } });
      if (!oldService)
        return res
          .status(404)
          .json({ success: false, message: "Service does not exist" });
      await Service.update(
        {
          name: name || oldService.name,
          description: description || oldService.description,
          price: price || oldService.price,
          is_active: is_active || oldService.is_active,
          categoryId: categoryId || oldService.categoryId,
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
  },
  destroy: async (req, res) => {
    try {
      const service = Service.findOne({ id: req.params.id });
      if (!service)
        return res.json({ success: false, message: "Service does not exist" });
      await Service.destroy({ where: { id: req.params.id } });
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
  },
  getRate: async (req, res) => {
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
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  createRate: async (req, res) => {
    const { quality, userId, serviceId } = req.body;
    try {
      if (parseInt(quality) < 1 || parseInt(quality) > 5)
        return res.json({ success: false, message: "Invalid quality" });
      if (!userId || !serviceId)
        return res.json({
          success: false,
          message: "Require user and service",
        });
      const user = await User.findOne({ where: { id: userId } });
      const service = await Service.findOne({ where: { id: serviceId } });
      if (!user || !service)
        return res
          .status(404)
          .json({ success: false, message: "User or service does not exist" });
      const rate = await Rate.findOne({ where: { userId, serviceId } });
      if (!rate) {
        const newRate = new Rate({
          quality,
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
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};
