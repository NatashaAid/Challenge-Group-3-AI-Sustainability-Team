const express = require('express');
const router = express.Router();
const controller = require('constrollers/sustainableSuppliersController');


router.get('/',controller.getSustainableSuppliers);


module.exports = router;