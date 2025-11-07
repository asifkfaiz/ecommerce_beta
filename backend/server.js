// const express = require("express");
import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const app = express();

const port=process.env.PORT

app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGO_URI);
app.use(express.urlencoded({ extended: true }));
app.use('/uploads',express.static(path.join('Q:/PROJECTS/Aesthetix_Projects/PROJECTS/eCommerce_beta/backend/',"uploads")));


import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js'


app.use('/',userRoutes)
app.use('/products',productRoutes)



app.get("/", (req, res) => {
  res.send("Hello World");
  // console.log(req.headers);
  
});

app.listen(port, () => {
  console.log(`SERVER RUNNING AT ${port}`);
  
  
});





