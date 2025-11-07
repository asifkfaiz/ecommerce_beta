const express = require("express");
const app = express();
const path=require('path')
const mongoose = require('mongoose');
const cors=require('cors')
require('dotenv').config()

const port=process.env.PORT

app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGO_URI);
app.use(express.urlencoded({ extended: true }));
app.use('/uploads',express.static(path.join(__dirname,"uploads")));

const userRoutes=require('./routes/userRoutes')
const productRoutes=require('./routes/productRoutes')


app.use('/',userRoutes)
app.use('/products',productRoutes)



app.get("/", (req, res) => {
  res.send("Hello World");
  // console.log(req.headers);
  
});

app.listen(port, () => {
  console.log(`SERVER RUNNING AT ${port}`);
  
  
});





