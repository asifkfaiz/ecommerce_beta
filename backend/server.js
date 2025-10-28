const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors=require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGO_URI);


const userRoutes=require('./routes/userRoutes')
const productRoutes=require('./routes/productRoutes')


app.use('/',userRoutes)
app.use('/products',productRoutes)



app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING AT ${port}`);
});
