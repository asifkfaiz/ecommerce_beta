// const express=require('express')
// const auth=require('../middleware/userAuth')
// const upload=require('../middleware/uploadImage')
// const productController=require('../controllers/productController')
import express from 'express'
import upload from '../middleware/uploadImage.js'
import * as productController from '../controllers/productController.js'

const productRoutes=express.Router()


productRoutes.post('/addProduct',upload.single('image'),productController.addProduct)
productRoutes.get('/getProducts',productController.getAllProducts)
productRoutes.get('/getProductsByCategory/:category',productController.getProductsByCategory)
productRoutes.get('/filterByCategory',productController.filterByCategory)
productRoutes.get('/productDetail/:id',productController.productDetails)

export default productRoutes