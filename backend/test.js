const fs = require("fs")
let dir = "public/uploads"
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
}