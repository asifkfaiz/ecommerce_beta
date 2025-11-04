const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (user) {
      const pswrdok = await bcrypt.compare(password, user.password);
      if (pswrdok) {

        const token=jwt.sign(
          {
            email:user.email,
            name:user.username
          },process.env.JWT_SECRET_KEY,//secret key
          {expiresIn: '1w'}//hr/w/d/m
        )

        console.log("User logged in:", email);
        res.status(200).json({message:"Login successful",token});
      } else {
        return res.status(400).json("Incorrect password");
      }
    }else{
      return res.status(400).json("User not found");
    }
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send("Error during login");
  }
};

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashpsrwd = await bcrypt.hash(password, 10);
    if (await Users.findOne({ email })) {
      return res.json("Email already in use...");
    }

    const user = new Users({ username, email, password: hashpsrwd });
    await user.save();
    const token=jwt.sign(
          {
            userId:user._id,
            name:user.username
          },process.env.JWT_SECRET_KEY,//secret key
          {expiresIn: '1w'}//hr/w/d/m
        )
    console.log("User added:", req.body);
    res.status(201).json({message:"User saved successfully",token});
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json("Error saving user");
  }
};

module.exports = {
  signup,
  login,
};
