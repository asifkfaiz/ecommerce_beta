const express=require('express')
const auth=require('../middleware/userAuth')
const productRoutes=express.Router()
const productController=require('../controllers/productController')

productRoutes.post('/addProduct',productController.addProduct)
productRoutes.get('/getProducts',auth,productController.getAllProducts)
productRoutes.get('/productDetail/:id',productController.productDetails)

module.exports=productRoutes