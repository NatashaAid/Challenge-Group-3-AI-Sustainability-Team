const express = require('express');
const router = express.Router();
const controller = require('../controllers/imageController');


router.post('/',controller.uploadImage);


module.exports = router;