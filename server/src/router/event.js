const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verify-token');

router.get('/event', verifyToken ,(req, res) => {
    const id =  req.userId;
    return res.status(200).json({
        success: true,        
    });
});

module.exports = router;