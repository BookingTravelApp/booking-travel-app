const {
  User,
  Cart,
  Service,
  Role,
  Account,
  RoleAccounts,
} = require("../model");

module.exports = {
  index: async (req, res) => {
    try {
      const listUser = await User.findAll({
        attributes: { exclude: ["accountId"] },
      });
      res.json({ success: true, listUser });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  show: async (req, res) => {
    try {
      const user = await User.findOne({
        where: { slug: req.params.slug },
        attributes: { exclude: ["id", "accountId"] },
      });
      res.json({ success: true, user });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  showMyUser: async (req, res) => {
    try {
      const user = await User.findOne({
        where: { accountId: req.userId },
        attributes: { exclude: ["id", "accountId"] },
      });
      if (!user)
        res.status(404).json({ success: false, message: "User not found" });
      res.json({ success: true, user });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  showStaffUser: async (req, res) => {
    try {
      const listUser = await User.findAll({
        attributes: {
          exclude: ["accountId"],
        },
        include: {
          model: Account,
          attributes: [],
          include: {
            model: RoleAccounts,
            attributes: [],
            include: {
              model: Role,
              attributes: [],
            },
          },
        },
        where: { "$account.role_accounts.role.name$": "employee" },
      });
      if (!listUser)
        res.status(404).json({ success: false, message: "User not found" });
      res.json({ success: true, listUser });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  showBasicUser: async (req, res) => {
    try {
      const listUser = await User.findAll({
        attributes: {
          exclude: ["accountId"],
        },
        include: {
          model: Account,
          attributes: [],
          include: {
            model: RoleAccounts,
            attributes: [],
            include: {
              model: Role,
              attributes: [],
            },
          },
        },
        where: { "$account.role_accounts.role.name$": "user" },
      });
      if (!listUser)
        res.status(404).json({ success: false, message: "User not found" });
      res.json({ success: true, listUser });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  update: async (req, res) => {
    const { name, phone_number, gender, date_of_birth, active, avatar_path } =
      req.body;
    try {
      if (!req.userId)
        return res.json({ success: false, message: "User id not found" });
      const oldUser = await User.findOne({ where: { accountId: req.userId } });
      if (!oldUser)
        return res.json({ success: false, message: "User is not exist" });
      await User.update(
        {
          name: name || oldUser.name,
          phone_number: phone_number || oldUser.phone_number,
          gender: gender || oldUser.gender,
          date_of_birth: date_of_birth || oldUser.date_of_birth,
          active: active || oldUser.active,
          avatar_path: avatar_path || oldUser.avatar_path,
        },
        { where: { accountId: req.userId } }
      );
      res.json({ success: true, message: "Updated user successful" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  getCart: async (req, res) => {
    try {
      const user = await User.findOne({ where: { accountId: req.userId } });
      const listCart = await Cart.findAll({ where: { userId: user.id } });
      res.json({ success: true, listCart });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  createCart: async (req, res) => {
    const { amount, serviceId, numberOfPeople, numberOfChild } = req.body;
    try {
      if (
        !numberOfChild ||
        !numberOfPeople ||
        numberOfChild < 0 ||
        numberOfPeople <= 0 ||
        numberOfPeople < numberOfChild
      )
        return res.json({
          success: false,
          message: "Incorrect number of people",
        });
      const user = await User.findOne({ where: { accountId: req.userId } });
      if (!user)
        return res
          .status(404)
          .json({ message: false, message: "User does not exist" });
      if (amount < 1)
        return res.json({ success: false, message: "Invalid amount" });
      const service = await Service.findOne({ where: { id: serviceId } });
      if (!service)
        return res
          .status(404)
          .json({ success: false, message: "Service does not exist" });
      const cart = await Cart.findOne({
        where: { userId: user.id, serviceId },
      });
      if (!cart) {
        const newCart = new Cart({
          amount,
          serviceId,
          userId: user.id,
          numberOfChild: numberOfChild || 0,
          numberOfPeople: numberOfPeople || 0,
        });
        await newCart.save();
      } else {
        await Cart.update(
          {
            amount: amount || cart.amount,
            serviceId: serviceId || cart.serviceId,
          },
          { where: { id: cart.id } }
        );
      }
      res.json({ success: true, message: "Update cart successful" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};
