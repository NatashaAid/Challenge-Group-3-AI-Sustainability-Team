const express = require('express');
const router = express.Router();
const controller = require('controllers/sustainableManufacturersController');


router.get('/',controller.getSustainableManufacturers);


module.exports = router;