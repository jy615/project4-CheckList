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

router.get("/", async(req,res)=> {
    try {
     //req.user return uuid
        const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [req.user])
        console.log(user.rows[0])
        return res.status(201).json(user.rows[0])
       
    } catch (error) {
        console.log(error)
        return res.status(500).json("Server Error")
    }
})

// get all patients
router.get("/get", async (req, res)=> {
    try {
        const getPatient = await pool.query("SELECT * FROM patient");
        return res.json(getPatient.rows)
    } catch (error) {
        console.log("error")
    }})

    // get 1 patient
    router.get("/get/:id", async (req, res)=> {
        try {
            const {id} = req.params;
            const getPatientById = await pool.query("SELECT * FROM patient WHERE id = $1", [id]);
            res.json(getPatientById.rows[0])
        } catch (err) {
            console.log(err.message)
        }})

    // get 1 patient from 2 tables
    router.get("/get/:id", async (req, res)=> {
        try {
            const {id} = req.params;
            const getPatientById = await pool.query("SELECT * FROM patient WHERE id = $1", [id]);
            res.json(getPatientById.rows[0])
        } catch (err) {
            console.log(err.message)
        }})
    // update patient date and time
router.put("/update/:id", async (req, res)=> {
    try {
        const {id} = req.params;
        const {patient_name, patient_ic,  patient_date, patient_time, patient_status, procedure_id} = req.body
        const updatePatient = await pool.query('UPDATE patient SET patient_date = $1, patient_time = $2, patient_procedure = $3 WHERE id = $4',[patient_date, patient_time, patien_procedure, id])
    } catch (err) {
        console.error(err.message)
    }
})

// get all procedure
router.get("/procedure/get", async (req, res)=> {
    try {
        const getProcedure = await pool.query("SELECT * FROM procedure");
        return res.json(getProcedure.rows)
    } catch (error) {
        console.log("error")
}
})
// update patient procedure
router.put("/procedure/:id", async (req, res)=> {
    try {
        const {id} = req.params;
        const {procedure_name} = req.body
        const updateProcedure = await pool.query('UPDATE procedure SET procedure_name = $1 WHERE id = $2',[procedure_name, id])
    } catch (err) {
        console.error(err.message)
    }
})

// delete patient procedure
router.delete("/patient/:id", async (req, res)=> {
    try {
        const {id} = req.params;
        const deletePatient = await pool.query('DELETE FROM procedure WHERE id = $1',[id])
        res.json("Patient was deleted")
    } catch (err) {
        console.error(err.message)
    }
})
module.exports = router;
