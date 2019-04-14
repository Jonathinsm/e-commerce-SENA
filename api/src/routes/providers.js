'use strict'

const express = require('express');
const router = express.Router();
const ProvidersController = require('../controllers/providers');
const md_auth = require('../middlewares/authenticated');

router.get('/provider', md_auth.ensureAuth,ProvidersController.GetProviders);
router.post('/provider',ProvidersController.CreateProvider);
router.get('/provider/:id',ProvidersController.FindProvider);
router.put('/provider/:id',ProvidersController.UpdateProvider);

module.exports = router;