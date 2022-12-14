const mongoose = require("mongoose");

const UserProfileSchema = mongoose.Schema({
    
    name: {type: String, required: true},
    dateOfBirth: {type: Date, required: true},
    specialty: {type: String, required: true},
    
})

module.exports = mongoose.model("UserProfile", UserProfileSchema)