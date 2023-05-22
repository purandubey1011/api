const express = require('express')
const { homepage} = require('../controllers/indexController')
const router = express.Router()

// home route / get 
router.get('/', homepage)

module.exports = router

