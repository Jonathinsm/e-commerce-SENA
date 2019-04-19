'use strict'

const express = require('express');
const router = express.Router();
const SellsController = require('../controllers/sells');
const md_auth = require('../middlewares/authenticated');


router.post('/sells',SellsController.RegisterSell);
router.get('/sells',SellsController.GetSells);


module.exports = router;