'use strict'

const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/products');
const md_auth = require('../middlewares/authenticated');

router.get('/product', md_auth.ensureAuth,ProductsController.GetProducts);
router.get('/producatributes',ProductsController.getAtrributes);
router.post('/product',ProductsController.CreateProduct);
router.get('/product/:id',ProductsController.FindProduct);
router.put('/product/:id',ProductsController.UpdatePrduct);

module.exports = router;