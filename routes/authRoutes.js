const router = require('express').Router();
const { 
    getUsers,
    signin, 
    register
} = require('../controller/authController');
const { uploadImage } = require('../controller/uploadController')
const upload = require('../utils/multer');
const { __auth__ } = require('../middlewire/common');

router.get('/users', getUsers);
router.post('/signin', signin);
router.post('/register', register);
router.post('/upload',upload.single("image"), uploadImage);

module.exports = router;
