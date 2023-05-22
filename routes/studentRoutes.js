const express = require('express')
const {  studentsignup,studentsignin,studentsignout } = require('../controllers/studentController')
const router = express.Router()


// post / student / signup
router.post('/signup',studentsignup)
router.post('/signin',studentsignin)
router.get('/signout',studentsignout)

module.exports = router

