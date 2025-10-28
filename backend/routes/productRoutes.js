const express=require('express')
const productRoutes=express.Router()
const productController=require('../controllers/productController')

productRoutes.post('/addProduct',productController.addProduct)
productRoutes.get('/getProducts',productController.getAllProducts)
productRoutes.get('/productDetail/:id',productController.productDetails)

module.exports=productRoutes