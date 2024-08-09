const express = require('express');
const router = express.Router();
const controller = require('../controllers/sustainableSupplierController');


router.get('/',controller.getSustainableSuppliers);


module.exports = router;