const multer = require('multer');
const path = require('path');
const { LIMIT_UNEXPECTED_FILE } = require(`${__basedir}/const/value.js`);


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, `${__basedir}/public/upload`);
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + '-' +path.extname(file.originalname));
    }
});


var singleUpload = multer({storage: storage});
var multiUpload = multer({storage: storage}).array('multipleImage', LIMIT_UNEXPECTED_FILE);

const uploadMultipleFile = (req, res, next) => {
    multiUpload( (req, res, err) => {
        if (err instanceof multer.MulterError) {
            if (err.code === 'LIMIT_UNEXPECTED_FILE') {
              return res.send('Too many files to upload.');
            }
        }
        else if (err) {
            return res.send(err);
        }
        next();
    });
};

const getResult = async (req, res) => {
    if (req.body.images.length <= 0) {
      return res.send('You must select at least 1 image.');
    }
    const images = req.body.images
      .map(image => '' + image + '')
      .join('');
    return res.send(`Images were uploaded:${images}`);
  };

module.exports = {
    singleUpload,
    uploadMultipleFile,
    getResult
};