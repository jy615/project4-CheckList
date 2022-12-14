//* dotenv
require("dotenv").config();

//* DEPENDENCIES
const express = require("express");
const router = express.Router();
const UserLogin = require("../models/UserLogin");
const UserProfile = require("../models/UserProfile.js");