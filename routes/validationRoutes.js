const express = require('express')
const router = express.Router()
const dotenv = require('dotenv').config()
// const validation = require('../models/validation')
const validationController = require('../controllers/validationController')

// validation routes
router.post('/api/user/register', validationController.registration_user)

router.post('/api/user/login', validationController.login_user)

router.get('/api/user/logout', validationController.logout_user)

module.exports = router
