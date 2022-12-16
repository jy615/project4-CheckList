//* EXPRESS + Cors
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const pool = require("./db");
//* dotenv
const dotenv = require("dotenv");
const morgan = require("morgan");
require("dotenv").config();

//* middleware
app.use(cors());
app.use(morgan("dev"));

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match
//   // the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//* ROUTES
app.get("/get/user/:id", async (req, res) => {
  try {
    //req.user return uuid
    const { id } = req.params;
    // console.log(req.user);
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    // console.log(user.rows[0]);
    return res.status(200).json(user.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Server Error");
  }
});
app.use("/patient", require("./routes/patientList"));
app.use("/auth", require("./routes/authJwt"));

app.listen(8080, () => {
  console.log("server is runnning on port 8080");
});
