const express=require('express')
const userController=require('../controller/userController')

const multerConfig = require('../middleware/multermiddleware')

const router = new express.Router()

router.post('/add',multerConfig.single("profile"),userController.addUser)

router.get('/get-all-users',userController.getallUser)

router.delete('/delete-user/:id',userController.deleteUser)

router.put('/edit/user/:id',multerConfig.single("profile"),userController.editUser)

module.exports = router








// const express = require('express')

// const userController = require('../controller/userController')

// const multerConfig = require('../middleware/multermiddleware')

// // creating object
// const router = new express.Router()

// // request from the frontend go to the function addUser inside the userController 
// router.post('/add', multerConfig.single("profile"), userController.addUser)

// router.get('/get-all-users',userController.getallUser)

// module.exports = router