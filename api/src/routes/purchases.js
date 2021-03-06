'use strict'

const express = require('express');
const router = express.Router();
const PurchasesController = require('../controllers/purchases');
const md_auth = require('../middlewares/authenticated');

router.get('/purchases',md_auth.ensureAuth,PurchasesController.GetPurchases);
router.get('/purchaseattributes',md_auth.ensureAuth,PurchasesController.getAtrributes);
router.post('/purchases',md_auth.ensureAuth,PurchasesController.RegisterPurchase);
//router.get('/purchase/:id',PurchasesController.FindPurchases);

module.exports = router;