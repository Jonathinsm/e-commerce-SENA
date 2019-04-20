'use strict'

const express = require('express');
const router = express.Router();
const ProvidersController = require('../controllers/providers');
const md_auth = require('../middlewares/authenticated');

router.get('/provider', md_auth.ensureAuth,ProvidersController.GetProviders);
router.post('/provider',md_auth.ensureAuth,ProvidersController.CreateProvider);
router.get('/provider/:id',md_auth.ensureAuth,ProvidersController.FindProvider);
router.put('/provider/:id',md_auth.ensureAuth,ProvidersController.UpdateProvider);

module.exports = router;