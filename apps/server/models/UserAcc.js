const mongoose = require("mongoose");

const UserAccSchema = mongoose.Schema({
    
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    userInfo: {type: mongoose.Schema.Types.ObjectId, ref: "UserAcc", unique: true},

})

module.exports = mongoose.model("UserAcc", UserAccSchema)