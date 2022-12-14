const mongoose = require("mongoose");

const PatientProfile = mongoose.Schema({
    name: {type: Date, required: true}, 
    date: {type: Date, required: true},
    time: {type: String, required: true},
    procedure: {type: String, required: true},
    procedureStatus: {type: String, required: true},
    
});

module.exports = mongoose.model("PatientProfile", PatientProfile);