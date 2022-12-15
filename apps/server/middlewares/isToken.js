const jwt = require("jsonwebtoken");
require("dotenv").config();

// token stored in local storage

const isToken = (req, res, next) => {
  try {
    //get token from header
    // const token = req.header("token");
    // console.log(req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json("Not Authorize");
    }
    // // verify token
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(payload);
    req.user = payload.user;
    next();
  } catch (err) {
    console.log(err.message);
    return res.status(401).json("Not Authorize");
  }
};

module.exports = isToken;
