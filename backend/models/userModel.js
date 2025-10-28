const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    required:true,
    type:String,
  }
})

const Users = mongoose.model('Users', userSchema);
module.exports=Users