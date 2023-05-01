const multer = require("multer")
const path = require("path")
const { v4: uuid } = require("uuid")
const fs = require("fs")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let dir = "public/uploads"
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true })
        }
        cb(null, "public/uploads")
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        const fn = uuid() + ext
        req.body.img = "uploads/" + fn
        cb(null, fn)
    }
})


module.exports = multer({ storage })