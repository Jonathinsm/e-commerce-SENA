'use strict'

const express = require('express');
const router = express.Router();
const PurchasesController = require('../controllers/purchases');
const md_auth = require('../middlewares/authenticated');

router.get('/purchase', md_auth.ensureAuth,PurchasesController.GetPurchases);
router.get('/purchaseattributes',PurchasesController.getAtrributes);
//router.get('/purchase/:id',PurchasesController.FindPurchases);

module.exports = router;