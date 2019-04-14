'use strict'

const express = require('express');
const router = express.Router();
const EmployeesController = require('../controllers/users');
const md_auth = require('../middlewares/authenticated');

router.get('/users', md_auth.ensureAuth,EmployeesController.GetUsers);
router.post('/users',EmployeesController.CreateUser);
router.post('/users/login',EmployeesController.LoginUser);
router.get('/users/:id',EmployeesController.FindUser);
router.put('/users/:id',md_auth.ensureAuth,EmployeesController.UpdateUser);
router.delete('/users/:id',EmployeesController.DeleteUser);

module.exports = router;