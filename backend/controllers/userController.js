const user = require("../models/userModle")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.registerUser = async (req, res) => {
    try {
        // const { password } = req.body
        req.body.password = await bcrypt.hash(req.body.password, 10)

        const result = await user.create(req.body)

        const token = await jwt.sign({ id: result._id }, process.env.JWT_KEY)
        res.status(201).json({
            message: "reegister successfully",
            result: {
                name: result.name,
                email: result.email,
                token
            }
        })
    } catch (error) {
        res.status(402).json({
            message: "error" + error
        })

    }
}
exports.getAllUser = async (req, res) => {
    try {
        const result = await user.find()
        res.json({
            message: "fetch Successs",
            result
        })
    } catch (error) {
        res.status(402).json({
            message: "error" + error
        })

    }
}
exports.deleteAllUser = async (req, res) => {
    try {
        const result = await user.deleteMany()
        res.json({
            message: "delete all succesfilly Successs",

        })
    } catch (error) {
        res.status(402).json({
            message: "error" + error
        })

    }
}



exports.loginUser = async (req, res) => {
    try {
        const result = await user.findOne({ email: req.body.email })
        if (!result) {
            return res.status(400).json({
                message: "email not register with us"
            })
        }

        const varify = await bcrypt.compare(req.body.password, result.password)
        if (!varify) {
            return res.json({
                message: "password not match"
            })
        }

        const token = jwt.sign({ id: result._id }, process.env.JWT_KEY, { expiresIn: "1w" })
        res.json({
            message: "user Login",
            result: {
                name: result.name,
                email: result.email,
                token
            }
        })
    } catch (error) {
        res.status(402).json({
            message: "error" + error
        })

    }
}

