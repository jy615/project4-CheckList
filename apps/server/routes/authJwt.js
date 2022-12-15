//* DEPENDENCIES
const express = require("express");
const router = express.Router();
const pool = require("../db");
const isUser = require ("../middlewares/isUser.js")
const isToken = require("../middlewares/isToken.js")
const jwtGenerator = require("../utils/jwtGenerator.js")
//* bcrypt dependencies
const bcrypt = require("bcrypt");
const saltRounds = 10;
//* dotenv
require("dotenv").config();
// DO NOT TOUCH HERE 
router.post("/register", async (req, res) => {
    const { email, name, password } = req.body;
  
    try {
      const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
        email
      ]);
  
      if (user.rows.length > 0) {
        return res.status(401).json("User already exist!");
      }
  
      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(password, salt);
  
      let newUser = await pool.query(
        "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
        [name, email, bcryptPassword]
      );
  
      const token = jwtGenerator(newUser.rows[0].user_id);
  
      return res.json({ token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });

  // get 1 user
  router.get("/get/user/:id", async (req, res)=> {
    try {
        const {id} = req.params;
        const getUserById = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return res.status(200).json(getUserById.rows[0])
    } catch (err) {
        res.status(500).json("error")
        console.error(err.message)
    }})

  module.exports = router
