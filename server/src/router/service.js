const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verify-token');
const db = require('../database/config');

// @router GET /service
// @access public
router.get('/service', verifyToken , async (req, res) => {
    const { id, username } = req;
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

// router POST /service:update
// @access private
router.post('/service', verifyToken, async(req, res) => {

});
module.exports = router;