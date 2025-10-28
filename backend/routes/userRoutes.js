const express=require('express')
const userRoutes=express.Router()
const auth=require('../middleware/userAuth')
const userController=require('../controllers/userController')

userRoutes.post('/signup',userController.signup)
userRoutes.post('/login',userController.login)


module.exports=userRoutes