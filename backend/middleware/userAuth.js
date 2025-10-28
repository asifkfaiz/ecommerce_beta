const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
    
  }
  try {
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.email = verifiedUser;
    next();
  } catch (err) {
    res.status(401).json({ message: "invalid token" });
  }
};

module.exports = authenticateToken;
