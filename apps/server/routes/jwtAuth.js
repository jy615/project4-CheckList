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

//authorization
router.post("/register", isUser, async (req, res) => {
  try {
    //1. destructure data
    const { name, email, password } = req.body;
    //2. check if user exists -> if yes: throw error

    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);
    //return res.json(user.rows);
    
    if (user.rows.length !== 0) {
      return res.status(401).json("User already exist");
    } else {
    //3. if no -> bcrypt password
    const bcryptPassword = await bcrypt.hash(password, bcrypt.genSaltSync(saltRounds));
    //4. added new user into database
    const newUser = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, bcryptPassword]
    );
    
    //5. generate jwt token
    const token = jwtGenerator(newUser.rows[0].user_id);

    return res.json({ token });
    }
  } catch (err) {
    console.error(err.message);
    return res.status(500).json("Server error");
  }

});
router.post("/login", isUser, async (req, res) => {
  //1. destructure data

  const { email, password } = req.body;
  //2. check if user exists -> if yes: throw error

  try {
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Log In");
    }
//3. check password match
    const passwordMatch = await bcrypt.compareSync(
      password,
      user.rows[0].user_password
    );

    if (passwordMatch === false) {
      return res.status(401).json("Incorrect Password");
    }
//4. generate jwt token
const token = jwtGenerator(user.rows[0].user_id);
return res.json({ token });
} catch (err) {
console.log(err.message);
res.status(500).json("Token error");
}
});

router.get("/verify", isToken, async (req, res)=> {
try {
    return res.json("True")
} catch (error) {
console.log(error);
return res.status(500).json("Server Error")
}
})
module.exports = router;
