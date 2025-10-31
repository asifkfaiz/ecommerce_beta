const express=require('express')
const userRoutes=express.Router()
const auth=require('../middleware/userAuth')
const userController=require('../controllers/userController')

userRoutes.post('/signup',auth,userController.signup)
userRoutes.post('/login',auth,userController.login)


module.exports=userRoutes