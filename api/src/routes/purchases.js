'use strict'

const express = require('express');
const router = express.Router();
const PurchasesController = require('../controllers/purchases');
const md_auth = require('../middlewares/authenticated');

router.get('/purchases',PurchasesController.GetPurchases);
router.get('/purchaseattributes',PurchasesController.getAtrributes);
router.post('/purchases',PurchasesController.RegisterPurchase);
//router.get('/purchase/:id',PurchasesController.FindPurchases);

module.exports = router;