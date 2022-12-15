const express = require('express');
const router = express.Router();
const BillController = require('../controller/BillController');

router.get('/', BillController.index);

router.post('/', BillController.create);

router.delete('/:id', BillController.destroy);

module.exports = router;
