//* DEPENDENCIES
const express = require("express");
const router = express.Router();
const pool = require("../db");
const isUser = require("../middlewares/isUser.js");
const isToken = require("../middlewares/isToken.js");
const jwtGenerator = require("../utils/jwtGenerator.js");
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
      email,
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
    // console.log(newUser.rows);

    const token = jwtGenerator(newUser.rows[0].user_id);

    const { id, user_name } = newUser.rows[0];
    // console.log(id, user_name);

    return res.json({ id, user_name, token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/createProflie", async (req, res) => {
  try {
    const { id, name, dob, speciality } = req.body;

    // console.log(req.body);
    const user = await pool.query(
      "UPDATE users SET user_name = $1, user_dob = $2, user_specialty = $3 WHERE id = $4",
      [name, dob, speciality, id]
    );
    res.json({ msg: "User created" });
  } catch (error) {
    // console.log(error);
    res.status(500).send("Server error");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email);
    const user = await pool.query(
      "SELECT * FROM users WHERE user_email = $1 ",
      [email]
    );
    // console.log(user);
    if (user.rows.length === 0) {
      return res.status(401).json("User not found!");
    }

    let valid = await bcrypt.compare(password, user.rows[0].user_password);
    console.log(valid);

    if (!valid) {
      return res.status(401).json("Invalid password!");
    }
    console.log(user.rows[0].id);

    const token = jwtGenerator(user.rows[0].id);

    return res.json({ token });
  } catch (error) {
    res.status(500).send("Server error");
  }
});

// get 1 user
router.get("/get/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getUserById = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    return res.status(200).json(getUserById.rows[0]);
  } catch (err) {
    res.status(500).json("error");
    console.error(err.message);
  }
});

module.exports = router;
