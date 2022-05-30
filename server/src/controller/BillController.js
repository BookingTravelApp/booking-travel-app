const {
  Service,
  BillDetail,
  Bill,
  User,
  Account,
  RoleAccounts,
  Role,
  Cart,
} = require("../model");

module.exports = {
  index: async (req, res) => {
    try {
      const listBill = await Bill.findAll();
      res.json({
        success: true,
        listBill,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },
  show: async (req, res) => {
    try {
      const bill = await Bill.findOne({
        where: { id: req.params.id, "$user.accountId": req.userId },
        include: {
          model: User,
          attributes: [],
        },
      });
      return res.json({ success: true, bill });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  showUserBills: async (req, res) => {
    try {
      const listBill = await Bill.findAll({
        where: { "$user.accountId": req.userId },
        include: {
          model: User,
          attributes: [],
        },
      });
      return res.json({ success: true, listBill });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  create: async (req, res) => {
    const { listCartId } = req.body;
    try {
      if (!listCartId)
        return res
          .status(404)
          .json({ success: false, message: "No service found" });
      const account = await Account.findOne({
        include: User,
        where: { id: req.userId },
      });
      if (!account)
        return res
          .status(404)
          .json({ success: false, message: "No user found" });
      let checkService,
        newBillDetail,
        newBillDetailArray = [],
        newBill;
      var checkStatus = true;
      listCartId.forEach(async (element) => {
        checkService = await Service.findOne({
          where: { id: element },
        });
        if (!checkService) {
          checkStatus = false;
        }
      });
      if (!checkStatus)
        return res.json({ success: false, message: "Service doesn't exist" });
      const listCart = await Cart.findAll({ where: { id: listCartId } });
      var totalPrice = 0;
      newBill = new Bill({
        totalPrice: 0,
        status: "unpaid",
        managerId: "",
        userId: account.user.id,
      });
      var tempService = null;
      for (var element = 0; element < listCart.length; element++) {
        tempService = await Service.findOne({
          where: { id: listCart[element].serviceId },
        });
        newBillDetail = new BillDetail({
          amount: listCart[element].amount,
          price: tempService.price,
          numberOfPeople: listCart[element].numberOfPeople,
          numberOfChild: listCart[element].numberOfChild,
          billId: newBill.id,
          serviceId: listCart[element].serviceId,
        });
        totalPrice +=
          listCart[element].amount *
          (tempService.price *
            (listCart[element].numberOfPeople -
              listCart[element].numberOfChild / 2));
        newBillDetailArray.push(newBillDetail);
      }
      newBill.totalPrice = totalPrice;
      await newBill.save();
      newBillDetailArray.forEach(async (element) => {
        await element.save();
      });
      return res.json({ success: true, message: "Bill create successful" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  // role employee
  confirmBill: async (req, res) => {
    const { billId } = req.body;
    try {
      if (!billId)
        return res.json({ success: false, message: "Bill id not found" });
      const bill = await Bill.findOne({ where: { id: billId } });
      if (!bill) return res.json({ success: false, message: "Bill not found" });
      bill.status = "paid";
      bill.managerId = req.userId;
      bill.save();
      return res.json({ success: true, message: "Confirm bill success" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  // role basic user or employee
  cancelBill: async (req, res) => {
    const { billId } = req.body;
    try {
      if (!billId)
        return res.json({ success: false, message: "Bill id not found" });
      const bill = await Bill.findOne({ where: { id: billId } });
      if (!bill) return res.json({ success: false, message: "Bill not found" });
      userAccount = await Account.findOne({
        include: [
          { model: User },
          { model: RoleAccounts, include: { model: Role } },
        ],
        where: { id: req.id },
      });
      var checkCondition = true;
      if (userAccount.user != bill.userId) {
        checkCondition = false;
        userAccount.RoleAccounts.forEach((item) => {
          if (item.role.name == "employee" || item.role.name == "admin") {
            checkCondition = true;
          }
        });
      }
      if (!checkCondition)
        return res.json({ success: false, message: "Bill not found" });
      if (bill.status == "paid")
        return res.json({
          success: true,
          message: "Bill is paid can not cancel",
        });
      bill.managerId = req.userId;
      bill.status = "cancelled";
      bill.save();
      return res.json({ success: true, message: "Cancelled bill successful" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  //role basic user
  restoreBill: async (req, res) => {
    const { billId } = req.body;
    try {
      if (!billId)
        return res.json({ success: false, message: "Bill id not found" });
      const bill = await Bill.findOne({ where: { id: billId } });
      if (!bill) return res.json({ success: false, message: "Bill not found" });
      userAccount = await Account.findOne({
        include: [{ model: User }],
        where: { id: req.id },
      });
      if (bill.userId != userAccount.user.id) {
        return res.json({ success: false, message: "Bill not found" });
      }
      if (bill.status == "unpaid" || bill.status == "paid")
        return res.json({
          success: false,
          message: "Can not restore this bill",
        });
      bill.status = "unpaid";
      bill.managerId = req.userId;
      bill.save();
      return res.json({ success: true, message: "Confirm bill success" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  destroy: async (req, res) => {},
};
