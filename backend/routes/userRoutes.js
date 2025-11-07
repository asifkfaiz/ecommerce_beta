import express from 'express'
import {signup,login} from '../controllers/userController.js'
const userRoutes=express.Router()


userRoutes.post('/signup',signup)
userRoutes.post('/login',login)


// module.exports=userRoutes
export default userRoutes


