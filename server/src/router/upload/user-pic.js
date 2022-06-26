
const express = require('express');
const router = express.Router();
const db = require(`${__basedir}/database/config`);
const { verifyToken, upload } = require(`${__basedir}/middleware`);
const { DEFAULT_USER_PIC } = require(`${__basedir}/const/value.js`);
// @router POST /user-pic-form
// @private access

router.get('/avatar', (req, res) => {
    return res.sendFile(`${__basedir}/view/upload.html`);
});

router.post('/avatar', verifyToken ,upload.singleUpload.single('user') ,async(req, res) => {
    const {userId, username } = req;
    try {
        const user = await db.Account.findAll({where: {
            id: userId,
        }});
    
        await db.Account.update(
            {avatar: req.file.filename},
            {where: {id: userId}}
        );

    } catch (error) {
        return res.json({
            success: false, 
            message: 'Server internal error'
        });
    }
});

// @router avatar/:filename
// private
router.get('/avatar/:filename', verifyToken ,(req, res) => {
    const filename = req.params.filename;
    const { userId, username } = req;

    if(filename) {
        try {
            const filepath = `${__basedir}\\public\\upload\\${filename}`;
            if(require('fs').existsSync(filepath)){
                return res.sendFile(filepath);
            }
            else{
                return res.sendFile( `${__basedir}\\public\\upload\\${DEFAULT_USER_PIC}`);
            }
            
        } catch (error) {
            return res.json({
                success: 'false',
                message: 'server internal error'
            });
        }
    }

    return res.status(404).json({
        susscess: false,
        message: 'file not found'
    });
});

module.exports = router;
