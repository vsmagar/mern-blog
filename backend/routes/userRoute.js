const express = require("express")
const { registerUser, getAllUser, deleteAllUser, loginUser } = require("../controllers/userController")
const router = express.Router()

router.post("/register", registerUser)
router.get("/", getAllUser)
router.delete("/destroy", deleteAllUser)
router.post("/login", loginUser)

module.exports = router