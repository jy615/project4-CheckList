const jwt = require("jsonwebtoken");
require("dotenv").config();


// token stored in local storage

const isToken =  (req, res, next) => {
    try {
        //get token from header
        const token = req.header("token");
        if (!token) {
            return res.status(401).json("Not Authorize");

        }
        // verify token
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = payload.user
    } catch (err) {
        console.log(err.message);
        return res.status(401).json("Server Error")
    }
}

module.exports = isToken