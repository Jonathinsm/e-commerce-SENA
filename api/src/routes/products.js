'use strict'

const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/products');
const md_auth = require('../middlewares/authenticated');

router.get('/product', md_auth.ensureAuth,ProductsController.GetProducts);
router.get('/producatributes',md_auth.ensureAuth,ProductsController.getAtrributes);
router.get('/productssingle',md_auth.ensureAuth,ProductsController.getProductsSingle);
router.post('/product',md_auth.ensureAuth,ProductsController.CreateProduct);
router.get('/product/:id',md_auth.ensureAuth,ProductsController.FindProduct);
router.put('/product/:id',md_auth.ensureAuth,ProductsController.UpdatePrduct);

module.exports = router;