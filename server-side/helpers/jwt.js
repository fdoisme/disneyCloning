const jwt = require("jsonwebtoken")
const secretKey = process.env.key_jwt

function signToken(data) {
    // console.log(process.env);
    console.log(secretKey);
    return jwt.sign(data, secretKey)
}

function verifyToken(token) {
    return jwt.verify(token, secretKey)
}

module.exports = {
    signToken, verifyToken
}