//* EXPRESS + Cors
const express = require("express");
const cors = require ("cors");
const app = express();
const path = require("path");

//* dotenv
const dotenv = require('dotenv');
require("dotenv").config();

//* middleware
app.use(cors())
app.use(express.json())



//* ROUTES
app.use("/patient", require("./routes/patientList"))
app.use("/auth", require("./routes/authJwt"))

app.listen(5000, ()=> {
    console.log("server is runnning on port 5000")
})