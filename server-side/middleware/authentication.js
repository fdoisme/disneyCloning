const { verifyToken } = require("../helpers/jwt")
const { User } = require("../models")

async function authentication(req, res, next) {
    try {
        // console.log("APAKAH MASUK SINI?");
        const access_token = req.headers.access_token
        if (!access_token) {
            throw ({ name: "unauthentication" })
        }
        const { id, email, username } = verifyToken(access_token)
        const user = await User.findOne({ where: { email: email, id: id } })
        if (!user) {
            throw ({ name: "unauthentication" })
        }
        req.user = { id, email, username }
        next()
    } catch (error) {
        next(error)
    }
}


module.exports = authentication