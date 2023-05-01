const mongoose = require("mongoose")


const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add title"]
    },
    desc: {
        type: String,
        required: [true, "Please add desc"]
    },
    img: {
        type: String,
        required: [true, "Please add image"]
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: [true, "Please add image url"]
    }
}, { timestamp: true })

module.exports = mongoose.model("blog", blogSchema)