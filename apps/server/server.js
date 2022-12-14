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

app.listen(5000, ()=> {
    console.log("server is runnning on port 5000")
})

//* ROUTES

app.use("/auth", require("./routes/jwtAuth"))
app.use("/patientList", require("./routes/patientList"))