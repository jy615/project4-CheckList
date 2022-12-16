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
    const user = await pool.query("SELECT * FROM patient");
    // console.log(user.rows[0]);
    return res.status(200).json(user.rows);
  } catch (error) {
    // console.log(error);
    return res.status(500).json("Server Error");
  }
});

// get all patients
router.get("/get", isToken, async (req, res) => {
  try {
    const getPatient = await pool.query("SELECT * FROM patient ");
    // console.log(getPatient.rows);
    return res.json(getPatient.rows);
  } catch (error) {
    // console.log("error");
    return res.status(500).json("Server Error");
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
    // const { procedere, patient_ic, date, times, procedure_id } = req.body;
    const procedure_status = req.body.procedure_status || "";
    const procedere = req.body.procedere || "";
    const date = req.body.date || "";
    const times = req.body.times || "";
    console.log(req.body);

    let yourDate = new Date(date);

    let newDate = yourDate.toISOString().split("T")[0];
    const updatePatient = await pool.query(
      "UPDATE patient SET patient_date = $1, patient_time = $2, patient_procedure = $3,patient_status =$4 WHERE id = $5",
      [newDate, times, procedere, procedure_status, id]
    );

    res.json("Patient updated");
  } catch (err) {
    // console.log(err);
    return res.status(500).json("Server Error");
  }
});
router.put("/updateProcedure/:id", isToken, async (req, res) => {
  try {
    const { id } = req.params;
    // const procedureStatus = req.body.procedure_status;
    // // console.log(procedureStatus);
    console.log(req.body);
    const { procedureStatus } = req.body;
    // console.log(procedureStatus);

    const updatePatient = await pool.query(
      "UPDATE patient SET patient_status =$1 WHERE id = $2",
      [procedureStatus, id]
    );

    res.json("Patient updated");
  } catch (err) {
    // console.log(err);
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
    // console.log("error");
    return res.status(500).json("Server Error");
  }
});
// update patient procedure
router.put("/procedure/update/:id", isToken, async (req, res) => {
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
router.delete("/procedure/delete/:id", isToken, async (req, res) => {
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
