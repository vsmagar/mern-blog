const mongoose = require("mongoose")

const userModel = mongoose.Schema({
    name: {
        type: String,
        required: [true, "pleasse name"]
    },
    email: {
        type: String,
        required: [true, "pleasse email"]
    },
    password: {
        type: String,
        required: [true, "pleasse enre password"]
    },
    admin: {
        type: Boolean,
        default: false
    },
    passwordResetAt: {
        type: Date,
    },


}, { timestamp: true })

module.exports = mongoose.model("user", userModel)