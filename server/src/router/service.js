const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verify-token');
const role = require('../middleware/role');
const ServiceController = require('../controller/ServiceController');

router.get('/', ServiceController.index);

router.get('/get-tour-list', ServiceController.showTourList);
router.get('/get-hotel-list', ServiceController.showHotelBookingList);
router.get('/get-plane-list', ServiceController.showPlaneList);
router.get('/get-car-rental-list', ServiceController.showCarRentalList);
router.get('/tag/:slug', ServiceController.showServiceFromTag);
router.get('/:slug', ServiceController.show);

router.post('/', [verifyToken, role.employee], ServiceController.create);

router.put('/', [verifyToken, role.employee], ServiceController.update);

router.delete('/:id', [verifyToken, role.employee], ServiceController.destroy);

//@Relationship
//@Rate
router.get('/rate/:id', ServiceController.getRate);

router.post('/rate', ServiceController.createRate);

module.exports = router;
