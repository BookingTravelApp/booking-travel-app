const { Service, BillDetail, Bill, User } = require('../model');

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
        message: 'Internal server error',
      });
    }
  },
  create: async (req, res) => {
    const { totalPrice, userId, listService, status } = req.body;
    try {
      if (!listService)
        return res
          .status(404)
          .json({ success: false, message: 'No service found' });
      const user = await User.findOne({ where: { id: userId } });
      if (!user)
        return res
          .status(404)
          .json({ success: false, message: 'No user found' });
      let checkService,
        newBillDetail,
        newBillDetailArray = [],
        newBill;
      listService.forEach(async (element) => {
        checkService = await Service.findOne({ where: { id: element.id } });
        if (!checkService)
          return res.json({ success: false, message: 'Service doesn\'t exist' });
      });
      newBill = new Bill({
        totalPrice: totalPrice,
        status: status || 'unpaid',
        managerId: '',
      });
      listService.forEach((element) => {
        newBillDetail = new BillDetail({
          amount: element.amount,
          price: element.price,
          billId: newBill.id,
          serviceId: element.serviceId,
        });
        newBillDetailArray.push(newBillDetail);
      });
      // await newBill.save();
      // newBillDetailArray.forEach(async (element) => {
      //   await element.save();
      // });
      res.json({ success: true, message: 'Bill create successful' });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
  destroy: async (req, res) => {},
};
