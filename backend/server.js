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


{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bone-icon lucide-bone"><path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/></svg> */}


