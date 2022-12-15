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

router.get("/", isToken, async (req, res) => {
  try {
    //req.user return uuid
    // console.log(req.user);
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [
      req.user,
    ]);
    // console.log(user.rows[0]);
    return res.status(200).json(user.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Server Error");
  }
});

// get all patients
router.get("/get", isToken, async (req, res) => {
  try {
    const getPatient = await pool.query("SELECT * FROM patient");
    return res.json(getPatient.rows);
  } catch (error) {
    console.log("error");
  }
});

// get 1 patient
router.get("/get/:id", isToken, async (req, res) => {
  try {
    const { id } = req.params;
    const getPatientById = await pool.query(
      "SELECT * FROM patient WHERE id = $1",
      [id]
    );
    res.json(getPatientById.rows[0]);
  } catch (err) {
    return res.status(500).json("Server Error");
  }
});

// get 1 patient from 2 tables
// router.get("/get/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const getPatientById = await pool.query(
//       "SELECT * FROM patient WHERE id = $1",
//       [id]
//     );
//     res.json(getPatientById.rows[0]);
//   } catch (err) {
//     console.log(err.message);
//   }
// });
// update patient date and time
router.put("/update/:id", isToken, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      patient_name,
      patient_ic,
      patient_date,
      patient_time,
      patient_status,
      procedure_id,
    } = req.body;
    const updatePatient = await pool.query(
      "UPDATE patient SET patient_date = $1, patient_time = $2 WHERE id = $3",
      [patient_date, patient_time, id]
    );

    res.json("Patient updated");
  } catch (err) {
    return res.status(500).json("Server Error");
  }
});

router.delete("/delete/:id", isToken, async (req, res) => {
  try {
    const { id } = req.params;

    // console.log(id);
    await pool.query("DELETE FROM patient WHERE id = $1", [id]);

    res.json("Patient deleted");
  } catch (error) {
    return res.status(500).json("Server Error");
  }
});

// get all procedure
router.get("/procedure/get", isToken, async (req, res) => {
  try {
    const getProcedure = await pool.query("SELECT * FROM procedure");
    return res.json(getProcedure.rows);
  } catch (error) {
    console.log("error");
  }
});
// update patient procedure
router.put("/procedure/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { procedure_name } = req.body;
    const updateProcedure = await pool.query(
      "UPDATE procedure SET procedure_name = $1 WHERE id = $2",
      [procedure_name, id]
    );
  } catch (err) {
    console.error(err.message);
  }
});

// delete patient procedure
router.delete("/procedure/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletePatient = await pool.query(
      "DELETE FROM procedure WHERE id = $1",
      [id]
    );
    res.json("Patient was deleted");
  } catch (err) {
    console.error(err.message);
  }
});
module.exports = router;
