const jwt = require("jsonwebtoken")
exports.protected = (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.status(401).json({
                message: "Please Provide token"
            })
        }
        const { id } = jwt.verify(token, process.env.JWT_KEY)
        if (!id) {
            return res.status(401).json({
                message: "invlide TOken"
            })
        }
        req.body.id = id
        next()
    } catch (error) {
        return res.status(401).json({
            message: "errorrr" + error
        })
    }
}