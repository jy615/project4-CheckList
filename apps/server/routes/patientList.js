//* DEPENDENCIES
const express = require("express");
const router = express.Router();
const pool = require("../database");
const isUser = require ("../middlewares/isUser.js")
const isToken = require("../middlewares/isToken.js")
const jwtGenerator = require("../utils/jwtGenerator.js")
//* bcrypt dependencies
const bcrypt = require("bcrypt");
const saltRounds = 10;
//* dotenv
require("dotenv").config();

router.get("/", isUser, async(req,res)=> {
    try {
     //req.user return uuid
        const user = await pool.query('SELECT * FROM users WHERE user_id =$1', [req.user])
        return res.status(201).json(user.rows[0])
    } catch (error) {
        console.log(error)
        return res.status(500).json("Server Error")
    }
})

module.exports = router;
