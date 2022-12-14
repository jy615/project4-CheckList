const mongoose = require("mongoose");

const PatientProcedureSchema = mongoose.Schema({
    twoIdentify: {type: Boolean, required: true},
    consentForm: {type: Boolean, required: true},
    drugAllergy: {type: Boolean, required: true},
    hypertension: {type: Boolean, required: true},
    dyslipidemia: {type: Boolean, required: true},
    diabetic: {type: Boolean, default: false, required: true },
    familyHistory: {type: Boolean, default: false}, required: true,
    smoker: {type: Boolean, default: false, required: true},
    menopause: {type: Boolean, default: false, required: true},
    betablockers: {type: Boolean, default: false, required: true},
    asthma: {type: Boolean, default: false, required: true},
    glaucoma: {type: Boolean, default: false, required: true},
    remarks: {type: String, required: true},
    patientInfo: {type: mongoose.Schema.Types.ObjectId, ref: "PatientProfile"},
    
});

module.exports = mongoose.model("PatientProcedure", PatientProcedureSchema);