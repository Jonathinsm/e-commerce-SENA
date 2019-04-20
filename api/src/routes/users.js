'use strict'

const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users');
const md_auth = require('../middlewares/authenticated');

router.get('/users', md_auth.ensureAuth,UsersController.GetUsers);
router.post('/users',UsersController.CreateUser);
router.post('/users/login',UsersController.LoginUser);
router.get('/users/:id',md_auth.ensureAuth,UsersController.FindUser);
router.put('/users/:id',md_auth.ensureAuth,md_auth.ensureAuth,UsersController.UpdateUser);
router.delete('/users/:id',md_auth.ensureAuth,UsersController.DeleteUser);

module.exports = router;