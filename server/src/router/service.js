const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verify-token');
const db = require('../database/config');
const { validationResult } = require('express-validator');
const validator = require('../middleware/validator');

// @router GET /service
// @access public
router.get('/service', verifyToken , async (req, res) => {
    try {
        const itemList = await db.Service.findAll();

        return res.json({
            succes: true,
            data: itemList
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server internal error'
        });
    }
    

    return res.status(200).json({
        success: true,
    });
});

// router POST /service:create
// @access private
router.post('/service:create', verifyToken , async(req, res) => {
    console.log(req);
    const error = validationResult(req);
    const {
        service_name,
        description,
        role_service_id,
        image_url,
        price,
    } = req.body;

    if(!error.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: error.array()
        });
    };

    try {
        const newService = new db.Service({
            service_name,
            description,
            role_service_id,
            image_url,
            price,
        });
        await newService.save();

        return res.json({
            success: true,
            message: 'create service successfull',
            newService
        });
        
    } catch (error) {
        console.log('##', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

router.delete('/service:delete/:id', verifyToken, async(req, res) => {
    try {
        console.log('##############',req.params.id);
        const problem = await db.Service.findByPk(req.params.id);
        if(!problem) {
           return res.status(404).json({
               success: false,
               message: 'service not found'
           });
        }

        await problem.destroy();

        return res.json({
            success: true,
            message: 'delete service successfull'
        });
        
    } catch(error) {
        console.log('##', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
module.exports = router;